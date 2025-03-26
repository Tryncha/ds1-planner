const express = require('express');
const { userExtractor } = require('../middleware');

const {
  getAllBuildsFromGame,
  getUserBuildsFromGame,
  getBuildById,
  postBuild,
  updateBuildById,
  deleteBuildById
} = require('../controllers/darkSouls3Controller');

const darkSouls3Router = express.Router();

darkSouls3Router.get('/', getAllBuildsFromGame);
darkSouls3Router.get('/my-builds', userExtractor, getUserBuildsFromGame);
darkSouls3Router.get('/:id', getBuildById);
darkSouls3Router.post('/', userExtractor, postBuild);
darkSouls3Router.put('/:id', userExtractor, updateBuildById);
darkSouls3Router.delete('/:id', userExtractor, deleteBuildById);

module.exports = darkSouls3Router;
