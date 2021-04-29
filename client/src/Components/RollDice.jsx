import React, { useEffect, useState } from "react";
import "./RollDice.css";
import Die from "./Die";
import { useDispatch, useSelector } from "react-redux";
import { fetchamount, fetchDiceValue, fetchWinResult } from "../Redux/actions";

function RollDice(props) {
  const sides = ["one", "two", "three", "four", "five", "six"];
  const [die1, setDie1] = useState("one");
  const [die2, setDie2] = useState("one");
  const [rolling, setRolling] = useState(false);
  const dispatch = useDispatch();
  const { diceone, dicetwo } = useSelector((state) => state);

  useEffect(() => {
    setDie1(sides[diceone - 1]);
    setDie2(sides[dicetwo - 1]);
    setRolling(false);
    dispatch(fetchamount());
    // eslint-disable-next-line
  }, [diceone, dicetwo]);

  const roll = () => {
    if (!props.diceoption || !props.amountoption) {
      alert("Select both Dice option and Amount option");
    } else {
      dispatch(fetchDiceValue(props));
      setRolling(true);
      dispatch(fetchWinResult());
    }
  };
  const handleBtn = rolling ? "RollDice-rolling" : "";

  return (
    <div className="RollDice">
      <div className="RollDice-container">
        <Die face={die1} rolling={rolling} />
        <Die face={die2} rolling={rolling} />
      </div>
      <button className={handleBtn} disabled={rolling} onClick={roll}>
        {rolling ? "Rolling" : "Roll Dice!"}
      </button>
    </div>
  );
}

export default RollDice;
