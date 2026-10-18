const express = require("express");

const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleWare");

const cartController =
require("../controllers/cartController");


// Add To Cart
router.post(
  "/",
  authMiddleWare,
  cartController.addToCart
);


// View Cart
router.get(
  "/",
  authMiddleWare,
  cartController.getCart
);


// Update Quantity
router.put(
  "/:id",
  authMiddleWare,
  cartController.updateQuantity
);


// Remove Item
router.delete(
  "/:id",
  authMiddleWare,
  cartController.removeItem
);


// Clear Cart
router.delete(
  "/clear/all",
  authMiddleWare,
  cartController.clearCart
);

module.exports = router;