const express = require("express");
const router = express.Router();

const {
  DiceValue,
  Winner,
  UpdatedAmount,
} = require("../controllers/controllers");

router.post("/dicevalue", DiceValue);
router.get("/winner", Winner);
router.get("/amount", UpdatedAmount);

module.exports = router;
