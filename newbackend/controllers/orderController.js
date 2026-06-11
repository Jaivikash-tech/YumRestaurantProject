const Order = require("../models/Order");
const Cart = require("../models/Cart");

exports.placeOrder = async (req, res) => {

  try {

    const { addressId } = req.body;

    const cartItems =
      await Cart.find({
        userId: req.user.id
      }).populate("foodId");

    if (cartItems.length === 0) {

      return res.status(400).json({
        message: "Cart Empty"
      });

    }

    let totalAmount = 0;

    const items = [];

    cartItems.forEach(item => {

      totalAmount +=
        item.foodId.price *
        item.quantity;

      items.push({
        foodId: item.foodId._id,
        quantity: item.quantity,
        price: item.foodId.price
      });

    });

    const order =
      await Order.create({

        userId: req.user.id,

        addressId,

        items,

        totalAmount

      });

    await Cart.deleteMany({
      userId: req.user.id
    });

    res.status(201).json({
      success: true,
      message: "Order Placed",
      order
    });

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};

exports.getMyOrders = async (req, res) => {

  try {

    const orders =
      await Order.find({
        userId: req.user.id
      })
      .populate("addressId")
      .populate("items.foodId");

    res.json(orders);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};

exports.getOrderById = async (req, res) => {

  try {

    const order =
      await Order.findById(req.params.id)
      .populate("addressId")
      .populate("items.foodId");

    res.json(order);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};


// Admin View All Orders
exports.getAllOrders = async (req, res) => {

  try {

    const orders =
      await Order.find()
      .populate("userId")
      .populate("addressId")
      .populate("items.foodId");

    res.json(orders);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};


// Update Order Status
exports.updateOrderStatus =
async (req, res) => {

  try {

    const order =
      await Order.findByIdAndUpdate(
        req.params.id,
        {
          status: req.body.status
        },
        {
          new: true
        }
      );

    res.json(order);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};