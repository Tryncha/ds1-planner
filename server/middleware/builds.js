function getAllBuilds(BuildModel) {
  return async (request, response) => {
    try {
      const builds = await BuildModel.find({}).populate('user', { username: 1, name: 1 });
      response.status(200).json(builds);
    } catch (error) {
      response.status(500).json({ error: 'internal server error' });
    }
  };
}

function getUserBuilds(BuildModel) {
  async (request, response) => {
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
  };
}

module.exports = { getAllBuilds, getUserBuilds };
