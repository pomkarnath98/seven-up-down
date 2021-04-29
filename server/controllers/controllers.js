let base = 5000;
let amount = base;

const DiceValue = async (req, res) => {
  const diceOne = Math.floor(Math.random() * 6) + 1;
  const diceTwo = Math.floor(Math.random() * 6) + 1;
  const total = diceOne + diceTwo;

  const { diceoption, amountoption } = req.body;

  if (amount < Number(amountoption)) {
    return res.status(400).send("Insufficient balance to play");
  }

  if (
    (amountoption != "100" && amountoption != "200" && amountoption != "500") ||
    (diceoption != "7" && diceoption != "7UP" && diceoption != "7DOWN")
  ) {
    return res.status(406).send("Input is not acceptable");
  }

  if (
    (diceoption === "7UP" && total > 7) ||
    (diceoption === "7DOWN" && total < 7)
  ) {
    amount += 2 * amountoption;
  } else if (diceoption === "7" && total === 7) {
    amount += 5 * amountoption;
  } else {
    amount -= amountoption;
  }

  res.json({ diceOne, diceTwo, total });
};

const Winner = (_, res) => {
  if (amount > base) res.json({ win: true });
  else res.json({ win: false });
  base = amount;
};

const UpdatedAmount = (_, res) => {
  res.json({ amount });
};

module.exports = {
  DiceValue,
  Winner,
  UpdatedAmount,
};
