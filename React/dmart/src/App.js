import "./App.css";
import { useState } from "react";
import './Component/ClassBased.css'
// import FunctionBased from './Component/FunctionBased.js';
// import ClassBased from './Component/ClassBased.js';
// import StateManage from './Component/Hook/StateManage.js';
// import Count from './Component/Hook/Count.js';


// import Groceries from './Component/InventoryDashboard/Groceries.js';
// import PackagedGoods from './Component/InventoryDashboard/PackagedGoods.js';
// import ListItems from "./Component/InventoryDashboard/ListItems.js";
// import Electronics from "./Component/InventoryDashboard/Electronics.js";
// import ComputorAccessories from "./Component/InventoryDashboard/ComputorAccessories.js";
// import Stand from "./Component/InventoryDashboard/Stand.js";

// import RefObject from './Component/Hook/RefObject.js'
// import SalesReport from './Component/SalesDashboard/SalesReport.js';
// import MonthlySalesReport from './Component/SalesDashboard/MonthlySalesReport.js';
// import UseReducer from './Component/Hook/UseReducer.js';
// import UseMemo from './Component/Hook/UseMemo.js';
// import QuaterlySalesReport from './Component/SalesDashboard/QuaterlySalesReport.js';

// import UseCallback from './Component/Hook/UseCallback/UseCallback.js';
import A from './Component/Hook/UseContext/A.js'

function App() {
  let [state, setState] = useState(false);
  return (
    <div>
      <div className="nav-bar">
        <div className="logo">
          <img src="https://logowik.com/content/uploads/images/dmart-avenue-supermarts4302.jpg" />
        </div>
        <div className="nav-link" href="#">
          Home
        </div>
        <div className="nav-link" href="#">
          Electronics
        </div>
        <div className="nav-link" href="#">
          Home
        </div>
        <div className="nav-link" href="#">
          Home
        </div>
        <div className="nav-link" href="#">
          Home
        </div>
      </div>
    {/* <Count/> */}
    {/* <RefObject/> */}
    {/* <SalesReport/> */}
    {/* <MonthlySalesReport/> */}
    {/* <UseReducer/> */}
    {/* <QuaterlySalesReport/> */}

    {/* <UseMemo/> */}
    {/* <UseCallback/> */}
    <A/>

      {/* <Electronics/> */}
        {/* {state ? <ComputorAccessories /> : <Stand />}
      <div className="train-info">

        <button onClick={() => setState(true)}>ComputorAccessories</button>
        <button onClick={() => setState(false)}>Stand</button>
      </div> */}
    </div>
  );
  // let showComponent = false;

  // if(showComponent){
  // return  <FunctionBased/>
  // }else{
  //  return <ClassBased/>
  // }
  //  return showComponent ? <FunctionBased/> : <ClassBased/>

  // return <StateManage/>
  // return <Groceries/>
  // return <PackagedGoods/>

  // return <ListItems/>

  // return (
  //   <div className="App">
  //     <div>Hello React Component</div>
  //     <FunctionBased/>
  //     <ClassBased/>
  //   </div>
  // );
}

export default App;
