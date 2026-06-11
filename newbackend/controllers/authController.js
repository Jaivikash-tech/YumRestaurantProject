const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// User Registration
exports.register = async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const existingUser = await User.findOne({
      email
    });

    if (existingUser) {

      return res.status(400).json({
        success: false,
        message: "Email already exists"
      });

    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    const user = await User.create({

      name,

      email,

      password: hashedPassword

    });

    res.status(201).json({

      success: true,

      message: "User Registered Successfully",

      userId: user._id

    });

  } catch (err) {

    res.status(500).json({

      success: false,

      message: err.message

    });

  }

};


// User Login
exports.login = async (req, res) => {

  try {

    const { email, password } = req.body;

    const user = await User.findOne({
      email
    });

    if (!user) {

      return res.status(404).json({

        success: false,

        message: "User Not Found"

      });

    }

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {

      return res.status(401).json({

        success: false,

        message: "Invalid Password"

      });

    }

    const token = jwt.sign(

      {
        id: user._id,
        role: user.role
      },

      process.env.JWT_SECRET,

      {
        expiresIn: "1d"
      }

    );

    res.status(200).json({

      success: true,

      message: "Login Successful",

      token,

      name: user.name

    });

  } catch (err) {

    res.status(500).json({

      success: false,

      message: err.message

    });

  }

};


// Admin Login
exports.adminLogin = async (req, res) => {

  try {

    const { username, password } =
      req.body;

    if (
      username === "admin" &&
      password === "admin123"
    ) {

      const token = jwt.sign(

        {
          role: "admin"
        },

        process.env.JWT_SECRET,

        {
          expiresIn: "1d"
        }

      );

      return res.status(200).json({

        success: true,

        message: "Admin Login Successful",

        token

      });

    }

    res.status(401).json({

      success: false,

      message: "Invalid Credentials"

    });

  } catch (err) {

    res.status(500).json({

      success: false,

      message: err.message

    });

  }

};