let result = (value)=>{
    console.log(`This is callback result = ${value}...`)
}

let add =(a,b,callback)=>{
    let resultVal = a +b
    callback(resultVal)
    console.log(a + b)
    return function(){
        console.log(`This is HOF...`)
    }
    // console.log(a+b)
}
let x = add(2,3,result);
x()


// result => callback

// add => HOF
// 1. HO function takes argumnent as function
// 2. return a new function