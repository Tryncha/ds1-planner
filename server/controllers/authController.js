const bcrypt = require('bcrypt');
const User = require('../models/UserModel');
const jwt = require('jsonwebtoken');

const register = async (request, response) => {
  // Add email later
  const { username, password } = request.body;

  if (username.length < 3) {
    return response.status(400).json({ error: 'username must have at least 3 characters' });
  }

  if (password.length < 8) {
    return response.status(400).json({ error: 'password must have at least 8 characters' });
  }

  if (!/[A-Z]/.test(password)) {
    return response.status(400).json({ error: 'password must have at least 1 uppercase letter' });
  }

  if (!/\d/.test(password)) {
    return response.status(400).json({ error: 'password must have at least 1 digit' });
  }

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

  const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: '30d' });

  response.status(200).send({ token, username: userToAuth.username, id: userToAuth._id });
};

module.exports = { register, login };
