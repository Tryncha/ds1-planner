const mongoose = require('mongoose');

const AttributesSchema = new mongoose.Schema(
  {
    vit: { type: Number, min: 1, max: 99, required: true },
    att: { type: Number, min: 1, max: 99, required: true },
    end: { type: Number, min: 1, max: 99, required: true },
    str: { type: Number, min: 1, max: 99, required: true },
    dex: { type: Number, min: 1, max: 99, required: true },
    res: { type: Number, min: 1, max: 99, required: true },
    int: { type: Number, min: 1, max: 99, required: true },
    fai: { type: Number, min: 1, max: 99, required: true }
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
    author: {
      type: String,
      required: true
    },
    content: {
      type: String,
      required: true,
      maxLength: 50 // Propense to changes
    },
    votes: Number
  },
  {
    timestamps: true
  },
  {
    _id: false
  }
);

const DS1BuildSchema = new mongoose.Schema(
  {
    title: {
      // Build name !== Character name
      type: String,
      default: 'Untitled',
      trim: true,
      minLength: 1,
      maxLength: 50, // Propense to changes
      required: true
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    anonymousUserId: String,
    expiresAt: Date,
    description: {
      // Build info or notes about build by author
      type: String,
      trim: true,
      maxLength: 50 // Propense to changes
    },
    externalUrl: {
      type: String,
      trim: true
    },
    videoUrl: {
      type: String,
      trim: true
    },
    screenshots: [String],
    isPublic: {
      type: Boolean,
      default: false,
      required: true
    },
    tags: [String],
    url: {
      // To share the build
      type: String,
      trim: true
    },
    views: Number,
    votes: Number,
    comments: [CommentsSchema],
    character: {
      name: {
        type: String,
        trim: true,
        maxLength: 16 // maxLength based in game
      },
      gender: {
        type: String,
        enum: ['male', 'female'],
        required: true
      },
      class: {
        type: String,
        required: true
      },
      startingGift: String,
      covenant: {
        type: String,
        default: 'noCovenant'
      },
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

// Expiration configuration
DS1BuildSchema.index({ expiresAt: 1 }, { expireAfterSeconds: 0 });

DS1BuildSchema.set('toJSON', {
  transform: (document, returnedBuild) => {
    returnedBuild.id = returnedBuild._id.toString();
    delete returnedBuild._id;
    delete returnedBuild.__v;
  }
});

module.exports = mongoose.model('DS1Build', DS1BuildSchema);
