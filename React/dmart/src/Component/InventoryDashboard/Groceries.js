import "../../Component/ClassBased.css";
import { useState } from "react";
import PackagedGoods from "./PackagedGoods.js";
let Groceries = () => {
  // let [grocery,setGrocery] =useState('Sugar');
  let [groceries, setGroceries] = useState({
    id: 1,
    name: "Pantry staples (spices, pasta, sauces)",
    image:
      "https://images.unsplash.com/photo-1542990253-a781e04c0082?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  });
  console.log(groceries);
  let addToCart = (item) => {
    // setGrocery(item);
    setGroceries(item);
  };
  return (
    <div className="train-info">
      <div>
        This is Groceries Dash Borad <b>Parent</b>
      </div>
      <h2>{groceries.name}</h2>

      <img src={groceries.image} width="200px" height="200px" />

      {/* <h1>{grocery}</h1> */}
      {/* <PackagedGoods name={grocery} addToCart ={addToCart}/> */}
      <PackagedGoods
        name={groceries.name}
        image={groceries.image}
        addToCart={addToCart}
      />
    </div>
  );
};

export default Groceries;
