const DS1BuildModel = require('../models/DS1BuildModel');
const DS2BuildModel = require('../models/DS2BuildModel');
const DS3BuildModel = require('../models/DS3BuildModel');
const ERBuildModel = require('../models/ERBuildModel');

const getAllBuildsFromAllGames = async (request, response) => {
  try {
    const [ds1Builds, ds2Builds, ds3Builds, eldenRingBuilds] = await Promise.all([
      DS1BuildModel.find({}).populate('user', { username: 1, name: 1 }),
      DS2BuildModel.find({}).populate('user', { username: 1, name: 1 }),
      DS3BuildModel.find({}).populate('user', { username: 1, name: 1 }),
      ERBuildModel.find({}).populate('user', { username: 1, name: 1 })
    ]);

    const allBuilds = [...ds1Builds, ...ds2Builds, ...ds3Builds, ...eldenRingBuilds];

    response.status(200).json(allBuilds);
  } catch (error) {
    response.status(500).json({ error: 'internal server error' });
  }
};

const getUserBuildsFromAllGames = async (request, response) => {
  try {
    if (request.token) {
      const [ds1Builds, ds2Builds, ds3Builds, eldenRingBuilds] = await Promise.all([
        DS1BuildModel.find({ user: request.user.id }).populate('user', { username: 1, name: 1 }),
        DS2BuildModel.find({ user: request.user.id }).populate('user', { username: 1, name: 1 }),
        DS3BuildModel.find({ user: request.user.id }).populate('user', { username: 1, name: 1 }),
        ERBuildModel.find({ user: request.user.id }).populate('user', { username: 1, name: 1 })
      ]);

      const builds = [...ds1Builds, ...ds2Builds, ...ds3Builds, ...eldenRingBuilds];
      return response.json(builds);
    } else if (request.anonymousUserId) {
      const [ds1Builds, ds2Builds, ds3Builds, eldenRingBuilds] = await Promise.all([
        DS1BuildModel.find({ anonymousUserId: request.anonymousUserId }).populate('user', { username: 1, name: 1 }),
        DS2BuildModel.find({ anonymousUserId: request.anonymousUserId }).populate('user', { username: 1, name: 1 }),
        DS3BuildModel.find({ anonymousUserId: request.anonymousUserId }).populate('user', { username: 1, name: 1 }),
        ERBuildModel.find({ anonymousUserId: request.anonymousUserId }).populate('user', { username: 1, name: 1 })
      ]);

      const builds = [...ds1Builds, ...ds2Builds, ...ds3Builds, ...eldenRingBuilds];
      return response.json(builds);
    }

    response.status(401).json({ error: 'unauthorized' });
  } catch (error) {
    response.status(500).json({ error: 'internal server error' });
  }
};

module.exports = {
  getAllBuildsFromAllGames,
  getUserBuildsFromAllGames
};
