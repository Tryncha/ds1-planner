const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const usersRouter = express.Router();

usersRouter.get('/', async (request, response) => {
  const users = await User.find({});
  response.json(users);
});

usersRouter.get('/:id', async (request, response) => {
  const user = await User.find(request.params.id);
  response.json(user);
});

usersRouter.post('/register', async (request, response) => {
  const { displayName, username, password } = request.body;

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const newUser = new User({ displayName, username, passwordHash });

  const savedUser = await newUser.save();
  response.status(201).json(savedUser);
});

usersRouter.post('/login', async (request, response) => {
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

  // Expires in 12 * 60 * 60 = 12 hours
  const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: 12 * 60 * 60 });

  response.status(200).send({ token, username: userToAuth.username, displayName: userToAuth.displayName });
});

usersRouter.delete('/:id', async (request, response) => {
  await User.findByIdAndDelete(request.params.id);
  response.status(204).end();
});

module.exports = usersRouter;
