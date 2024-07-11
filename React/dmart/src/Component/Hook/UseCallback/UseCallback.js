import React, { useState, useCallback } from "react";
import "../../../Component/ClassBased.css";
import Button from "./Button.js";
import Count from "./Count.js";
import Title from "./Title.js";

function UseCallback() {
  let [items, setItems] = useState(1);
  let [amount, setAmount] = useState(1000);

  let increaseItem = useCallback(() => {
    setItems(items + 1);
  }, [items]);

  // let increaseItem = () => {
  //   setItems(items + 1);
  // };

  let increaseAmount = useCallback(() => {
    setAmount(amount + 1000);
  }, [amount]);

  // let increaseAmount = () => {
  //   setAmount(amount + 1000);
  // };
  return (
    <div className="train-info">
      <Title />
      <Count name={items} />
      <Button handleClick={increaseItem}>Item</Button>
      <Count name={amount} />
      <Button handleClick={increaseAmount}>Amount</Button>
    </div>
  );
}

export default UseCallback;
