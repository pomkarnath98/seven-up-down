const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const route = require("./routes/route");

const PORT = process.env.PORT || 9000;
const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

app.use("/api", route);

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
