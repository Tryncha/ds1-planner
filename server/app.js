const config = require('./utils/config');
const express = require('express');
require('express-async-errors');
const cors = require('cors');
const mongoose = require('mongoose');
const middleware = require('./middleware');
const usersRouter = require('./routes/usersRouter');
const authRouter = require('./routes/authRouter');
const { allGamesRouter, darkSouls1Router, darkSouls2Router } = require('./routes/buildsRouter');

const app = express();

mongoose.set('strictQuery', false);

console.log('Connecting to', config.MONGODB_URI);
mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB!');
    console.log('-----');
  })
  .catch((error) => {
    console.error('Error connection to MongoDB:', error.message);
  });

app.use(cors());
app.use(express.static('dist'));
app.use(express.json());
app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);
app.use(middleware.anonymousUserIdExtractor);
app.use(middleware.authLogger);

app.use('/api/builds', allGamesRouter);
app.use('/api/builds/dark-souls-1', darkSouls1Router);
app.use('/api/builds/dark-souls-2', darkSouls2Router);

app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
