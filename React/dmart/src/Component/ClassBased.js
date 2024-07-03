import react, { Component } from "react";
import './ClassBased.css';
class ClassBased extends Component {
    constructor(){
        super()
        this.state = {
            tranInfo :"Morning Class Express at 09:00"
        }
    }

    handleClick =()=>{
        // this.state.tranInfo = "Evening Class Express at 19:00";
        // console.log(this.state.tranInfo)
        // this.forceUpdate()
        this.setState({
            tranInfo:"Evening Class Express at 19:00"
        })

    }
  render() {
    return (
      <div className = "train-info">
        <h1>Welcome to Class Component</h1>

        <h2>{this.state.tranInfo}</h2>
        <button onClick ={this.handleClick}>Train Status</button>
      </div>
    );
  }
}

export default ClassBased;
