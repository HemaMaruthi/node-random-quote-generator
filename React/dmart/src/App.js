import './App.css';
import FunctionBased from './Component/FunctionBased.js';
import ClassBased from './Component/ClassBased.js';
import StateManage from './Component/Hook/StateManage.js';
function App() {
  let showComponent = false;

  // if(showComponent){
  // return  <FunctionBased/>
  // }else{
  //  return <ClassBased/>
  // }
//  return showComponent ? <FunctionBased/> : <ClassBased/>

return <StateManage/>

  // return (
  //   <div className="App">
  //     <div>Hello React Component</div>
  //     <FunctionBased/>
  //     <ClassBased/>
  //   </div>
  // );
}

export default App;
