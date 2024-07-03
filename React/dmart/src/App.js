import './App.css';
import FunctionBased from './Component/FunctionBased.js';
import ClassBased from './Component/ClassBased.js'

function App() {
  return (
    <div className="App">
      <div>Hello React Component</div>
      <FunctionBased/>
      <ClassBased/>
    </div>
  );
}

export default App;
