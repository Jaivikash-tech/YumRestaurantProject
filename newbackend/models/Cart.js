const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  foodId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Food",
    required: true
  },

  quantity: {
    type: Number,
    default: 1
  }

}, {
  timestamps: true
});

module.exports = mongoose.model("Cart", cartSchema);