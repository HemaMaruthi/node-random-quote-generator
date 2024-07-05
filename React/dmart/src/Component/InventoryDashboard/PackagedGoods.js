import React from "react";
import "./PackagedGoods.css";
let PackagedGoods = (props) => {
  console.log(props);
  let addingToCart = () => {
    // props.addToCart("Chips");
    props.addToCart({
      id: 2,
      name: "Legumes (beans, lentils, peanuts)",
      image:
        "https://images.unsplash.com/photo-1472141521881-95d0e87e2e39?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    });
  };
  return (
    <div className="goods">
      <div>
        This is PackagedGoods Dash Board <b>Child</b>
      </div>
      {/* <h2>{props.name}</h2> */}
      {/* <h2>{props.name}</h2> */}
      <div>
        {/* <img src={props.image} width="200px" height="200px" /> */}
      </div>
      <button onClick={addingToCart}>Cart</button>
    </div>
  );
};

export default PackagedGoods;
