const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  description: {
    type: String,
    required: true
  },

  category: {
    type: String,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  image: {
    type: String
  },

  dateOfLaunch: {
    type: Date,
    default: Date.now
  },

  isActive: {
    type: Boolean,
    default: true
  },

  createdBy: {
    type: String,
    default: "admin"
  },

  createdOn: {
    type: Date,
    default: Date.now
  },

  modifiedBy: {
    type: String,
    default: null
  },

  modifiedOn: {
    type: Date,
    default: null
  }

});

module.exports = mongoose.model("Food", foodSchema);