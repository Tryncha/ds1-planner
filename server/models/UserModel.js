const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  },
  builds: {
    darkSouls1: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DS1Build'
      }
    ]
  },
  followers: [String],
  following: [String]
});

UserSchema.set('toJSON', {
  transform: (document, returnedUser) => {
    returnedUser.id = returnedUser._id.toString();
    delete returnedUser._id;
    delete returnedUser.__v;
    delete returnedUser.passwordHash;
  }
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;
