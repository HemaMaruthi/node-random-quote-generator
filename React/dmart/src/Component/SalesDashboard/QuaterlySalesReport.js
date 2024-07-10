import React,{useReducer} from 'react'
import "../../Component/ClassBased.css";

function QuaterlySalesReport() {

// let [month, setState] = useState(intialValue);
// let [saleReportValue, setState] = useState(intialValue);
// let [profit, setState] = useState(intialValue);



    let intialValue = {
        month:'',
        saleReportValue: 0,
        profit : 0
    }
    let formReducer=(formData, action)=>{
        console.log(action.type) // month
        console.log(action.payload) // July
        return {...formData,[action.type] : action.payload }
        //formData = { month : July}
    }

    let [formData, dispatch] = useReducer(formReducer, intialValue);

    let handleClick =(event)=>{
        event.preventDefault()
        console.log(formData)
    }

  return (
    <div className="train-info">
        <form>
            <div>
    {/* <button onClick={()=>dispatch({type:'Inc'})}>Count ++ </button> */}

                <input type="text"  placeholder="Enter Month" onChange={(e)=>dispatch({type:'month', payload:e.target.value})}/>
            </div>
            <div>
                <input type="number" placeholder="Enter Sale Report Value"  onChange={(e)=>dispatch({type:'saleReportValue', payload:e.target.value})}/>
            </div>
            <div>
                <input type="number" placeholder="Enter Profit" onChange={(e)=>dispatch({type:'profit', payload:e.target.value})}/>
            </div>

            <button onClick={handleClick}>Submit</button>
        </form>

        <h1>{formData.month}</h1>
        <h1>{formData.saleReportValue}</h1>
        <h1>{formData.profit}</h1>


    </div>
  )
}

export default QuaterlySalesReport