const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const loginRouter = require('express').Router();
const User = require('../models/user');

loginRouter.post('/', async (request, response) => {
  const { username, password } = request.body;

  const userToAuth = await User.findOne({ username });
  const isPasswordCorrect = userToAuth === null ? false : await bcrypt.compare(password, userToAuth.passwordHash);

  if (!userToAuth || !isPasswordCorrect) {
    return response.status(401).json({ error: 'invalid username or password' });
  }

  const userForToken = {
    username: userToAuth.username,
    id: userToAuth._id
  };

  // Expires in 12 * 60 * 60 = 6 hours
  const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: 12 * 60 * 60 });

  response.status(200).send({ token, username: userToAuth.username, name: userToAuth.name });
});

module.exports = loginRouter;
