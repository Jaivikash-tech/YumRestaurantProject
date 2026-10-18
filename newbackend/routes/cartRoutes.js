const express = require("express");

const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const cartController =
require("../controllers/cartController");


// Add To Cart
router.post(
  "/",
  authMiddleware,
  cartController.addToCart
);


// View Cart
router.get(
  "/",
  authMiddleware,
  cartController.getCart
);


// Update Quantity
router.put(
  "/:id",
  authMiddleware,
  cartController.updateQuantity
);


// Remove Item
router.delete(
  "/:id",
  authMiddleware,
  cartController.removeItem
);


// Clear Cart
router.delete(
  "/clear/all",
  authMiddleware,
  cartController.clearCart
);

module.exports = router;