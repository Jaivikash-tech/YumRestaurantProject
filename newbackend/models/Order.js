const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },

  addressId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
    required: true
  },

  items: [
    {
      foodId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Food"
      },

      quantity: Number,

      price: Number
    }
  ],

  totalAmount: {
    type: Number,
    required: true
  },

  status: {
    type: String,
    default: "Placed"
  }

}, {
  timestamps: true
});

module.exports = mongoose.model(
  "Order",
  orderSchema
);