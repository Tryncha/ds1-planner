const Build = require('../models/build');
const User = require('../models/user');
const buildsRouter = require('express').Router();
const jwt = require('jsonwebtoken');

buildsRouter.get('/', async (request, response) => {
  const builds = await Build.find({});
  response.json(builds);
});

buildsRouter.get('/:id', async (request, response) => {
  const build = await Build.findById(request.params.id);
  if (build) {
    response.json(build);
  } else {
    response.status(404).end();
  }
});

function getTokenFrom(request) {
  const authorization = request.get('authorization');
  if (authorization && authorization.startsWith('Bearer ')) {
    return authorization.replace('Bearer ', '');
  }
  return null;
}

buildsRouter.post('/', async (request, response) => {
  const decodedToken = jwt.verify(getTokenFrom(request), process.env.SECRET);
  if (!decodedToken.id) {
    return response.status(401).json({ error: 'token invalid' });
  }

  const userOwner = await User.findById(decodedToken.id);
  const buildToSave = new Build(request.body);

  buildToSave.character.name = buildToSave.character.name || 'Chosen Undead';

  const savedBuild = await buildToSave.save();
  userOwner.builds.darkSouls1 = userOwner.builds.darkSouls1.concat(savedBuild._id);
  await userOwner.save();

  response.json(savedBuild);
});

buildsRouter.put('/:id', async (request, response) => {
  const build = request.body;
  const updatedBuild = await Build.findByIdAndUpdate(request.params.id, build, {
    new: true,
    runValidators: true,
    context: 'query'
  });
  if (updatedBuild) {
    response.json(updatedBuild);
  } else {
    response.status(404).end();
  }
});

buildsRouter.delete('/:id', async (request, response) => {
  await Build.findByIdAndDelete(request.params.id);
  response.status(204).end();
});

module.exports = buildsRouter;
