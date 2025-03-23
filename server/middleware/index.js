const jwt = require('jsonwebtoken');
const User = require('../models/UserModel');

function requestLogger(request, response, next) {
  console.log('Method:         ', request.method);
  console.log('Path:           ', request.path);
  console.log('Body:           ', request.body);
  console.log('-----');
  next();
}

function unknownEndpoint(request, response) {
  response.status(404).send({ error: 'unknown endpoint' });
}

function tokenExtractor(request, response, next) {
  const authorization = request.get('Authorization');

  request.token =
    authorization && authorization.startsWith('Bearer ')
      ? authorization.replace('Bearer ', '')
      : (request.token = null);

  next();
}

function anonymousUserIdExtractor(request, response, next) {
  request.anonymousUserId = request.get('X-Anonymous-User-Id');
  next();
}

async function userExtractor(request, response, next) {
  if (request.token) {
    const decodedToken = jwt.verify(request.token, process.env.SECRET);
    if (!decodedToken.id) {
      return response.status(401).json({ error: 'token invalid' });
    }
    request.user = await User.findById(decodedToken.id);
  }
  next();
}

function authLogger(request, response, next) {
  console.log('Token:          ', request.token);
  console.log('AnonymousUserId:', request.anonymousUserId);
  console.log('-----');
  next();
}

function errorHandler(error, request, response, next) {
  console.error(error.message);

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' });
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message });
  } else if (error.name === 'MongoServerError' && error.message.includes('E11000 duplicate key error')) {
    return response.status(400).json({ error: 'expected `username` to be unique' });
  } else if (error.name === 'JsonWebTokenError') {
    return response.status(401).json({ error: 'token invalid' });
  } else if (error.name === 'TokenExpiredError') {
    return response.status(401).json({ error: 'token expired' });
  }

  next(error);
}

module.exports = {
  requestLogger,
  unknownEndpoint,
  tokenExtractor,
  anonymousUserIdExtractor,
  userExtractor,
  authLogger,
  errorHandler
};
