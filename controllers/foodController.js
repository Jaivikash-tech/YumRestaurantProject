const Food = require("../models/Food");

exports.addFood = async (req, res) => {

  try {

    const food = await Food.create(req.body);

    res.status(201).json({
      success: true,
      food
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message
    });

  }

};

exports.getAllFoods = async (req, res) => {

  try {

    const foods = await Food.find();

    res.json(foods);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};

exports.getCustomerFoods = async (req, res) => {

  try {

    const foods = await Food.find({
      isActive: true
    });

    res.json(foods);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};

exports.getFoodById = async (req, res) => {

  try {

    const food =
      await Food.findById(req.params.id);

    if (!food) {

      return res.status(404).json({
        message: "Food Not Found"
      });

    }

    res.json(food);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};


exports.updateFood = async (req, res) => {

  try {

    req.body.modifiedOn = new Date();

    req.body.modifiedBy = "admin";

    const food =
      await Food.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json({
      success: true,
      food
    });

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};


exports.deleteFood = async (req, res) => {

  try {

    const food =
      await Food.findByIdAndUpdate(
        req.params.id,
        {
          isActive: false,
          modifiedOn: new Date(),
          modifiedBy: "admin"
        },
        { new: true }
      );

    res.json({
      success: true,
      message: "Food Deleted",
      food
    });

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};