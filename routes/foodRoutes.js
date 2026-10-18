const express = require("express");

const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleWare");

const adminMiddleware =
require("../middleware/adminMiddleWare");

const foodController =
require("../controllers/foodController");


// Customer Foods
router.get(
  "/customer",
  foodController.getCustomerFoods
);


// Admin Foods
router.get(
  "/admin",
  authMiddleware,
  adminMiddleware,
  foodController.getAllFoods
);


// Single Food
router.get(
  "/:id",
  foodController.getFoodById
);


// Add Food
router.post(
  "/",
  authMiddleware,
  adminMiddleware,
  foodController.addFood
);


// Update Food
router.put(
  "/:id",
  authMiddleware,
  adminMiddleware,
  foodController.updateFood
);


// Soft Delete
router.delete(
  "/:id",
  authMiddleware,
  adminMiddleware,
  foodController.deleteFood
);

module.exports = router;