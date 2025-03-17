const express = require('express');
const { userExtractor } = require('../middleware/misc');
const { getAllBuilds } = require('../middleware/builds');
const DS1Build = require('../models/builds/DS1Build');
const DS2Build = require('../models/builds/DS2Build');

const allGames = express.Router();

allGames.get('/', async (request, response) => {
  try {
    const [ds1Builds, ds2Builds] = await Promise.all([
      DS1Build.find({}).populate('user', { username: 1, name: 1 }),
      DS2Build.find({}).populate('user', { username: 1, name: 1 })
    ]);

    const builds = [...ds1Builds, ...ds2Builds];

    response.status(200).json(builds);
  } catch (error) {
    response.status(500).json({ error: 'internal server error' });
  }
});

allGames.get('/user-builds', userExtractor, async (request, response) => {
  try {
    if (request.token) {
      const ds1Builds = await DS1Build.find({ user: request.user.id });
      const ds2Builds = await DS2Build.find({ user: request.user.id });

      const builds = [...ds1Builds, ...ds2Builds];
      return response.json(builds);
    } else if (request.anonymousUserId) {
      const ds1Builds = await DS1Build.find({ anonymousUserId: request.anonymousUserId });
      const ds2Builds = await DS2Build.find({ anonymousUserId: request.anonymousUserId });

      const builds = [...ds1Builds, ...ds2Builds];
      return response.json(builds);
    }

    response.status(401).json({ error: 'unauthorized' });
  } catch (error) {
    response.status(500).json({ error: 'internal server error' });
  }
});

function gameBuildsRouter(BuildModel) {
  const gameRouter = express.Router();

  gameRouter.get('/', getAllBuilds(BuildModel));

  gameRouter.get('/my-builds', userExtractor, async (request, response) => {
    try {
      if (request.token) {
        const builds = await BuildModel.find({ user: request.user.id });
        return response.json(builds);
      } else if (request.anonymousUserId) {
        const builds = await BuildModel.find({ anonymousUserId: request.anonymousUserId });
        return response.json(builds);
      }

      response.status(401).json({ error: 'unauthorized' });
    } catch (error) {
      response.status(500).json({ error: 'internal server error' });
    }
  });

  gameRouter.get('/:id', async (request, response) => {
    try {
      const build = await BuildModel.findById(request.params.id).populate('user', { username: 1, name: 1 });
      if (build) {
        response.json(build);
      } else {
        response.status(404).json({ error: 'build not found' });
      }
    } catch (error) {
      response.status(400).json({ error: 'invalid build id' });
    }
  });

  gameRouter.post('/', userExtractor, async (request, response) => {
    try {
      const buildToSave = new BuildModel(request.body);

      if (request.user) {
        buildToSave.user = request.user._id;
        delete buildToSave.anonymousUserId;
        delete buildToSave.expiresAt;
      } else if (request.anonymousUserId) {
        // Set to 30 days from the save -> days * hours * minutes * seconds * miliseconds
        // const expireDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
        const expireDate = new Date(Date.now() + 60 * 1000); // 1 minute for development & manual tests

        buildToSave.anonymousUserId = request.anonymousUserId;
        buildToSave.expiresAt = expireDate;
      }

      const savedBuild = await buildToSave.save();

      if (request.user) {
        console.log(request.user);
        request.user.builds.darkSouls1 = request.user.builds.darkSouls1.concat(savedBuild._id);
        await request.user.save();
      }

      response.json(savedBuild);
    } catch (error) {
      response.status(400).json({ error: error.message });
    }
  });

  function isAuthorized(build, user, anonymousUserId) {
    if (user && build.user && build.user.toString() === user.id) return true;
    if (anonymousUserId && build.anonymousUserId === anonymousUserId) return true;
    return false;
  }

  gameRouter.put('/:id', userExtractor, async (request, response) => {
    try {
      const buildToUpdate = await BuildModel.findById(request.params.id);

      if (!buildToUpdate) {
        return response.status(404).json({ error: 'build not found' });
      }

      if (!isAuthorized(buildToUpdate, request.user, request.anonymousUserId)) {
        return response.status(403).json({ error: 'permission denied' });
      }

      const newBuild = request.body;

      if (request.user) {
        delete newBuild.anonymousUserId;
        delete newBuild.expiresAt;
      } else if (request.anonymousUserId) {
        // Renewed to 30 days from the update -> days * hours * minutes * seconds * miliseconds
        // const renewedExpireDate = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
        const renewedExpireDate = new Date(Date.now() + 60 * 1000); // 1 minute for development & manual tests
        newBuild.expiresAt = renewedExpireDate;
      }

      const updatedBuild = await BuildModel.findByIdAndUpdate(request.params.id, newBuild, {
        new: true,
        runValidators: true,
        context: 'query'
      });

      response.json(updatedBuild);
    } catch (error) {
      response.status(400).json({ error: 'failed to update build' });
    }
  });

  gameRouter.delete('/:id', userExtractor, async (request, response) => {
    try {
      const buildToDelete = await BuildModel.findById(request.params.id);

      if (!buildToDelete) {
        return response.status(404).json({ error: 'build not found' });
      }

      if (!isAuthorized(buildToDelete, request.user, request.anonymousUserId)) {
        return response.status(403).json({ error: 'permission denied' });
      }

      if (request.user) {
        request.user.builds.darkSouls1 = request.user.builds.darkSouls1.filter(
          (buildId) => buildId.toString() !== request.params.id
        );
        await request.user.save();
      }

      await BuildModel.findByIdAndDelete(request.params.id);
      response.status(204).end();
    } catch (error) {
      response.status(400).json({ error: 'failed to delete build' });
    }
  });

  return gameRouter;
}

const darkSouls1 = gameBuildsRouter(DS1Build);
const darkSouls2 = gameBuildsRouter(DS2Build);
// const darkSouls3 = gameBuildsRouter(DS2Build);
// const eldenRing = gameBuildsRouter(DS2Build);

module.exports = { allGames, darkSouls1, darkSouls2 };
