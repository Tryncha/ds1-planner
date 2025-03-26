const express = require('express');
const { userExtractor } = require('../middleware');

const { getAllBuildsFromAllGames, getUserBuildsFromAllGames } = require('../controllers/gamesController');

const gamesRouter = express.Router();

gamesRouter.get('/', getAllBuildsFromAllGames);
gamesRouter.get('/user-builds', userExtractor, getUserBuildsFromAllGames);

module.exports = gamesRouter;
