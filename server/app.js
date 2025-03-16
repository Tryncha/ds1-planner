const config = require('./utils/config');
const express = require('express');
require('express-async-errors');
const cors = require('cors');
const buildsRouter = require('./routes/builds');
const mongoose = require('mongoose');
const middleware = require('./utils/middleware');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');

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

app.use('/api/builds', buildsRouter);
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
