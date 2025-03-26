const express = require('express');
const { userExtractor } = require('../middleware');

const {
  getAllBuildsFromGame,
  getUserBuildsFromGame,
  getBuildById,
  postBuild,
  updateBuildById,
  deleteBuildById
} = require('../controllers/darkSouls2Controller');

const darkSouls2Router = express.Router();

darkSouls2Router.get('/', getAllBuildsFromGame);
darkSouls2Router.get('/my-builds', userExtractor, getUserBuildsFromGame);
darkSouls2Router.get('/:id', getBuildById);
darkSouls2Router.post('/', userExtractor, postBuild);
darkSouls2Router.put('/:id', userExtractor, updateBuildById);
darkSouls2Router.delete('/:id', userExtractor, deleteBuildById);

module.exports = darkSouls2Router;
