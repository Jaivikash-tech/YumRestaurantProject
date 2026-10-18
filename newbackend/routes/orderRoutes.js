const express = require("express");

const router = express.Router();

const authMiddleWare =
require("../middleware/authMiddleWare");

const adminMiddleWare =
require("../middleware/adminMiddleWare");

const orderController =
require("../controllers/orderController");


// Place Order
router.post(
  "/",
  authMiddleWare,
  orderController.placeOrder
);


// My Orders
router.get(
  "/my-orders",
  authMiddleWare,
  orderController.getMyOrders
);


// Single Order
router.get(
  "/:id",
  authMiddleWare,
  orderController.getOrderById
);


// Admin Orders
router.get(
  "/admin/all",
  authMiddleWare,
  adminMiddleWare,
  orderController.getAllOrders
);


// Update Status
router.put(
  "/admin/:id",
  authMiddleWare,
  adminMiddleWare,
  orderController.updateOrderStatus
);

module.exports = router;