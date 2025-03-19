const config = require('./utils/config');
const express = require('express');
require('express-async-errors');
const cors = require('cors');
const mongoose = require('mongoose');
const middleware = require('./middleware/misc');
const usersRouter = require('./routes/users');
const buildsRouter = require('./routes/builds');

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
app.use(middleware.anonymousIdExtractor);
app.use(middleware.authLogger);

app.use('/api/builds', buildsRouter.allGames);
app.use('/api/builds/dark-souls-1', buildsRouter.darkSouls1);
app.use('/api/builds/dark-souls-2', buildsRouter.darkSouls2);
app.use('/api/users', usersRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
