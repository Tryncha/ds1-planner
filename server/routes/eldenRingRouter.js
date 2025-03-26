const express = require('express');
const { userExtractor } = require('../middleware');

const {
  getAllBuildsFromGame,
  getUserBuildsFromGame,
  getBuildById,
  postBuild,
  updateBuildById,
  deleteBuildById
} = require('../controllers/eldenRingController');

const eldenRingRouter = express.Router();

eldenRingRouter.get('/', getAllBuildsFromGame);
eldenRingRouter.get('/my-builds', userExtractor, getUserBuildsFromGame);
eldenRingRouter.get('/:id', getBuildById);
eldenRingRouter.post('/', userExtractor, postBuild);
eldenRingRouter.put('/:id', userExtractor, updateBuildById);
eldenRingRouter.delete('/:id', userExtractor, deleteBuildById);

module.exports = eldenRingRouter;
