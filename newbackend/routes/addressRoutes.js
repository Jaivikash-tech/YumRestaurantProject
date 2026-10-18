const express = require("express");

const router = express.Router();

const authMiddleWare =
require("../middleware/authMiddleWare");

const addressController =
require("../controllers/addressController");

router.post(
  "/",
  authMiddleWare,
  addressController.addAddress
);

router.get(
  "/",
  authMiddleWare,
  addressController.getAddresses
);


router.get(
  "/:id",
  authMiddleWare,
  addressController.getAddressById
);


router.put(
  "/:id",
  authMiddleWare,
  addressController.updateAddress
);


// Delete Address
router.delete(
  "/:id",
  authMiddleWare,
  addressController.deleteAddress
);

module.exports = router;