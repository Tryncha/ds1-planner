const mongoose = require('mongoose');

const AttributesSchema = new mongoose.Schema(
  {
    vitality: Number,
    attunement: Number,
    endurance: Number,
    strength: Number,
    dexterity: Number,
    resistance: Number,
    intelligence: Number,
    faith: Number
  },
  {
    _id: false
  }
);

const HandEquipmentSchema = new mongoose.Schema(
  {
    name: String,
    upgrade: {
      name: String,
      level: Number
    }
  },
  {
    _id: false
  }
);

const EquipmentSchema = new mongoose.Schema(
  {
    hands: {
      right: [HandEquipmentSchema],
      left: [HandEquipmentSchema]
    },
    armor: {
      head: String,
      chest: String,
      hands: String,
      legs: String
    },
    rings: [String],
    items: [String]
  },
  {
    _id: false
  }
);

const CommentsSchema = new mongoose.Schema(
  {
    author: String,
    content: String,
    upVotes: Number
  },
  {
    timestamps: true
  },
  {
    _id: false
  }
);

const BuildSchema = new mongoose.Schema(
  {
    // title: String, // Build title, not the same as character name
    game: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    description: String, // Build info or notes about build by author
    externalUrl: String,
    videoUrl: String,
    screenshots: [String],
    isPublic: Boolean, // Public or Private build
    tags: [String], // Like: Dex, Int, Early, Late, DLC, etc.
    url: String, // To share the build
    views: Number,
    comments: [CommentsSchema],
    upVotes: Number,
    character: {
      name: String,
      gender: String,
      startingClass: String,
      startingGift: String,
      covenant: String,
      humanity: Number,
      attributes: AttributesSchema,
      equipment: EquipmentSchema,
      spells: [String],
      conditions: [
        // Like: Low health, Full HP, Cursed, etc.
        {
          name: String,
          isActive: Boolean
        }
      ],
      metadata: {
        isPvP: Boolean,
        isTwoHanded: Boolean
      }
    }
  },
  {
    timestamps: true
  }
);

BuildSchema.set('toJSON', {
  transform: (document, returnedBuild) => {
    returnedBuild.id = returnedBuild._id.toString();
    delete returnedBuild._id;
    delete returnedBuild.__v;
  }
});

module.exports = mongoose.model('Build', BuildSchema);
