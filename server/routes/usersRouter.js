const express = require('express');
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
  followUserById,
  unfollowUserById
} = require('../controllers/usersController');

const usersRouter = express.Router();

usersRouter.get('/', getAllUsers);
usersRouter.get('/:id', getUserById);
usersRouter.put('/:id', updateUserById);
usersRouter.delete('/:id', deleteUserById);

usersRouter.put('/:id/follow', followUserById);
usersRouter.put('/:id/unfollow', unfollowUserById);

module.exports = usersRouter;
