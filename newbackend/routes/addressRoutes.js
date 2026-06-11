const express = require("express");

const router = express.Router();

const authMiddleware =
require("../middleware/authMiddleware");

const addressController =
require("../controllers/addressController");

router.post(
  "/",
  authMiddleware,
  addressController.addAddress
);

router.get(
  "/",
  authMiddleware,
  addressController.getAddresses
);


router.get(
  "/:id",
  authMiddleware,
  addressController.getAddressById
);


router.put(
  "/:id",
  authMiddleware,
  addressController.updateAddress
);


// Delete Address
router.delete(
  "/:id",
  authMiddleware,
  addressController.deleteAddress
);

module.exports = router;