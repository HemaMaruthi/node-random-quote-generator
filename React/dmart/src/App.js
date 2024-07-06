import "./App.css";
// import FunctionBased from './Component/FunctionBased.js';
// import ClassBased from './Component/ClassBased.js';
// import StateManage from './Component/Hook/StateManage.js';

// import Groceries from './Component/InventoryDashboard/Groceries.js';
// import PackagedGoods from './Component/InventoryDashboard/PackagedGoods.js';
// import ListItems from "./Component/InventoryDashboard/ListItems.js";
import Electronics from "./Component/InventoryDashboard/Electronics.js";


function App() {
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

    <Electronics/>
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
