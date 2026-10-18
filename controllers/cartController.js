const Cart = require("../models/Cart");
const Food = require("../models/Food");


// Add To Cart
exports.addToCart = async (req, res) => {

  try {

    const { foodId } = req.body;

    const existingItem = await Cart.findOne({
      userId: req.user.id,
      foodId,
    });

    if (existingItem) {

      existingItem.quantity += 1;

      await existingItem.save();

      return res.json(existingItem);
    }

    const cartItem = await Cart.create({
      userId: req.user.id,
      foodId,
      quantity: 1
    });

    res.status(201).json(cartItem);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};


// View Cart
exports.getCart = async (req, res) => {

  try {

    const cartItems = await Cart.find({
      userId: req.user.id
    }).populate("foodId");

    const validCartItems = [];
    const invalidCartItemIds = [];
    let total = 0;

    cartItems.forEach(item => {
      if (item.foodId) {
        validCartItems.push(item);
        total += item.foodId.price * item.quantity;
      } else {
        invalidCartItemIds.push(item._id);
      }
    });

    if (invalidCartItemIds.length > 0) {
      await Cart.deleteMany({ _id: { $in: invalidCartItemIds } });
    }

    res.json({
      items: validCartItems,
      total
    });

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};


// Update Quantity
exports.updateQuantity = async (req, res) => {

  try {

    const { quantity } = req.body;

    const item =
      await Cart.findByIdAndUpdate(
        req.params.id,
        { quantity },
        { new: true }
      );

    res.json(item);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};


// Remove Item
exports.removeItem = async (req, res) => {

  try {

    await Cart.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Item Removed"
    });

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};

exports.clearCart = async (req, res) => {

  try {

    await Cart.deleteMany({
      userId: req.user.id
    });

    res.json({
      message: "Cart Cleared"
    });

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};