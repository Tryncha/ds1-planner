const express = require('express');
const { userExtractor } = require('../middleware');

const {
  getAllBuildsFromGame,
  getUserBuildsFromGame,
  getBuildById,
  postBuild,
  updateBuildById,
  deleteBuildById
} = require('../controllers/darkSouls1Controller');

const darkSouls1Router = express.Router();

darkSouls1Router.get('/', getAllBuildsFromGame);
darkSouls1Router.get('/my-builds', userExtractor, getUserBuildsFromGame);
darkSouls1Router.get('/:id', getBuildById);
darkSouls1Router.post('/', userExtractor, postBuild);
darkSouls1Router.put('/:id', userExtractor, updateBuildById);
darkSouls1Router.delete('/:id', userExtractor, deleteBuildById);

module.exports = darkSouls1Router;
