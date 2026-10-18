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
  authMiddleWare,
  adminMiddleWare,
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
  authMiddleWare,
  adminMiddleWare,
  foodController.addFood
);


// Update Food
router.put(
  "/:id",
  authMiddleWare,
  adminMiddleWare,
  foodController.updateFood
);


// Soft Delete
router.delete(
  "/:id",
  authMiddleWare,
  adminMiddleWare,
  foodController.deleteFood
);

module.exports = router;