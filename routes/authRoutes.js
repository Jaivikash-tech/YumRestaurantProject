const express = require("express");

const router = express.Router();

const authController =
require("../controllers/authController");


// Register
router.post(
  "/register",
  authController.register
);


// User Login
router.post(
  "/login",
  authController.login
);


// Admin Login
router.post(
  "/admin/login",
  authController.adminLogin
);

module.exports = router;