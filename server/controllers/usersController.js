const UserModel = require('../models/UserModel');

const getAllUsers = async (request, response) => {
  try {
    const allUsers = await UserModel.find({});
    response.status(200).json(allUsers);
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const getUserById = async (request, response) => {
  const userId = request.params.id;
  try {
    const userFound = await UserModel.findById(userId);
    if (userFound) {
      response.status(200).json(userFound);
    } else {
      response.status(404).json({ error: 'user not found' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const updateUserById = async (request, response) => {
  const userId = request.params.id;
  const { requestUserId } = request.body;

  if (requestUserId === userId) {
    try {
      const updatedUser = await UserModel.findByIdAndUpdate(userId, request.body, {
        new: true,
        runValidators: true,
        context: 'query'
      });
      response.status(200).json(updatedUser);
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  } else {
    res.status(403).json({ error: 'you can only update your own profile' });
  }
};

const deleteUserById = async (request, response) => {
  const userId = request.params.id;
  const { requestUserId } = request.body;

  if (requestUserId === userId) {
    try {
      await UserModel.findByIdAndDelete(userId);
      response.status(200).json('user deleted successfully!');
    } catch (error) {
      response.status(500).json({ error: error.message });
    }
  } else {
    res.status(403).json({ error: 'you can only delete your own profile' });
  }
};

// Follow functionalities

const followUserById = async (request, response) => {
  const userId = request.params.id;
  const { requestUserId } = request.body;

  if (requestUserId === userId) {
    response.status(403).json({ error: 'you cannot follow yourself' });
  }

  try {
    const userToFollow = await UserModel.findById(userId);
    const userFollowing = await UserModel.findById(requestUserId);

    const isAlreadyFollowing = userToFollow.followers.includes(requestUserId);

    if (!isAlreadyFollowing) {
      await userToFollow.updateOne({ $push: { followers: requestUserId } });
      await userFollowing.updateOne({ $push: { following: userId } });
      response.status(200).json('user followed successfully!');
    } else {
      response.status(403).json({ error: 'this user is already following by you' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

const unfollowUserById = async (request, response) => {
  const userId = request.params.id;
  const { requestUserId } = request.body;

  if (requestUserId === userId) {
    response.status(403).json({ error: 'you cannot unfollow yourself' });
  }

  try {
    const userToUnfollow = await UserModel.findById(userId);
    const userUnfollowing = await UserModel.findById(requestUserId);

    const isFollowing = userToUnfollow.followers.includes(requestUserId);

    if (isFollowing) {
      await userToUnfollow.updateOne({ $pull: { followers: requestUserId } });
      await userUnfollowing.updateOne({ $pull: { following: userId } });
      response.status(200).json('user unfollowed successfully!');
    } else {
      response.status(403).json({ error: 'you are not following this user' });
    }
  } catch (error) {
    response.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  followUserById,
  unfollowUserById
};
