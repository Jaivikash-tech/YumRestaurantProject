const express = require("express");

const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const adminMiddleware =
require("../middleware/adminMiddleware");

const orderController =
require("../controllers/orderController");


// Place Order
router.post(
  "/",
  authMiddleware,
  orderController.placeOrder
);


// My Orders
router.get(
  "/my-orders",
  authMiddleware,
  orderController.getMyOrders
);


// Single Order
router.get(
  "/:id",
  authMiddleware,
  orderController.getOrderById
);


// Admin Orders
router.get(
  "/admin/all",
  authMiddleware,
  adminMiddleware,
  orderController.getAllOrders
);


// Update Status
router.put(
  "/admin/:id",
  authMiddleware,
  adminMiddleware,
  orderController.updateOrderStatus
);

module.exports = router;