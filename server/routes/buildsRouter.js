const express = require('express');
const { userExtractor } = require('../middleware');
const DS1BuildModel = require('../models/DS1BuildModel');
const DS2BuildModel = require('../models/DS2BuildModel');

const {
  getAllBuildsFromAllGames,
  getUserBuildsFromAllGames,
  getAllBuildsFromGame,
  getUserBuildsFromGame,
  getBuildById,
  postBuild,
  updateBuildById,
  deleteBuildById
} = require('../controllers/buildsController');

const allGamesRouter = express.Router();

allGamesRouter.get('/', getAllBuildsFromAllGames);
allGamesRouter.get('/user-builds', userExtractor, getUserBuildsFromAllGames);

function gameBuildsRouter(BuildModel) {
  const gameRouter = express.Router();

  gameRouter.get('/', getAllBuildsFromGame(BuildModel));
  gameRouter.get('/my-builds', userExtractor, getUserBuildsFromGame(BuildModel));
  gameRouter.get('/:id', getBuildById(BuildModel));
  gameRouter.post('/', userExtractor, postBuild(BuildModel));
  gameRouter.put('/:id', userExtractor, updateBuildById(BuildModel));
  gameRouter.delete('/:id', userExtractor, deleteBuildById(BuildModel));

  return gameRouter;
}

const darkSouls1Router = gameBuildsRouter(DS1BuildModel);
const darkSouls2Router = gameBuildsRouter(DS2BuildModel);
// const darkSouls3 = gameBuildsRouter(DS2Build);
// const eldenRing = gameBuildsRouter(DS2Build);

module.exports = { allGamesRouter, darkSouls1Router, darkSouls2Router };
