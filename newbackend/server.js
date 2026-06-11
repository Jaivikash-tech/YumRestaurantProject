require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB =
require("./config/db");

const authRoutes =
require("./routes/authRoutes");

const foodRoutes =
require("./routes/foodRoutes");

const cartRoutes =
require("./routes/cartRoutes");

const addressRoutes =
require("./routes/addressRoutes");

const orderRoutes =
require("./routes/orderRoutes");

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/foods", foodRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/address",addressRoutes);
app.use("/api/orders",orderRoutes);

app.get("/", (req, res) => {
  res.send("TruYum API Running");
});

const PORT =
process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `Server Running on ${PORT}`
  );

});