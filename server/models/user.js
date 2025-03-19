const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  displayName: String,
  passwordHash: String,
  builds: {
    darkSouls1: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'DS1Build'
      }
    ]
  }
});

UserSchema.set('toJSON', {
  transform: (document, returnedUser) => {
    returnedUser.id = returnedUser._id.toString();
    delete returnedUser._id;
    delete returnedUser.__v;
    delete returnedUser.passwordHash;
  }
});

module.exports = mongoose.model('User', UserSchema);
