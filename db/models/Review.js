const { Schema } = require('mongoose');

module.exports = new Schema(
  {
    name: {
      type: String,
      required: true,
      ref: 'users',
    },
    rating: {
      type: Number,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'users',
    },
    service_id: {
      type: Schema.Types.ObjectId,
      ref: 'services',
    },
  },
  { timestamps: true }
);
