const Address = require("../models/Address");

exports.addAddress = async (req, res) => {

  console.log("req.user =", req.user);
  console.log("body =", req.body);

  try {
    const address = await Address.create({
      userId: req.user.id,
      fullName: req.body.fullName,
      mobile: req.body.mobile,
      houseNo: req.body.houseNo,
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
      pincode: req.body.pincode
    });

    console.log("saved =", address);

    res.status(201).json(address);

  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err.message
    });
  }
};

exports.getAddresses = async (req, res) => {

  try {

    const addresses =
      await Address.find({
        userId: req.user.id
      });

    res.json(addresses);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};

exports.getAddressById = async (req, res) => {

  try {

    const address =
      await Address.findById(
        req.params.id
      );

    res.json(address);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};

exports.updateAddress = async (req, res) => {

  try {

    const address =
      await Address.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );

    res.json(address);

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};

exports.deleteAddress = async (req, res) => {

  try {

    await Address.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Address Deleted"
    });

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }

};