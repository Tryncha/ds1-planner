const bcrypt = require('bcrypt');
const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');

const register = async (request, response) => {
  // Add email later
  const { username, password } = request.body;

  const saltRounds = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const newUser = new User({ username, passwordHash });

  const savedUser = await newUser.save();
  response.status(201).json(savedUser);
};

const login = async (request, response) => {
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

  // Expires in 30 * 24 * 60 * 60 = 30 days
  const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: 30 * 24 * 60 * 60 });

  response.status(200).send({ token, username: userToAuth.username, id: userToAuth._id });
};

module.exports = { register, login };
