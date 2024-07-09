import React,{useState} from 'react';
import "../../Component/ClassBased.css";


function MonthlySalesReport() {

    let [formData, setFormData] = useState({
        name:'',
        report:''
    });
    console.log(formData)

    let getReportData =(event)=>{
        event.preventDefault();
        console.log(formData)
        console.log(`Custumer name ${formData.name} and report value ${formData.report}`)

    }
  return (
    <div className="train-info">
         <form>
            <div>
                <input type="text" placeholder="Enter Name" onChange={(e)=>setFormData({...formData,name: e.target.value})}/>
            </div>
            <div>
                <input type="number" placeholder="Enter Report Value" onChange={(e)=>setFormData({...formData,report: e.target.value})}/>
            </div>
            <button onClick={getReportData}>Submit</button>
        </form>
            <div>
            <div>Name: {formData.name}</div>
            <div>Report: {formData.report}</div>

            </div>
    </div>
  )
}

export default MonthlySalesReport