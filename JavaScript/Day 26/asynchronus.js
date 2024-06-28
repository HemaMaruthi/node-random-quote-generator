// console.log("This is one")
// console.log("This is three")

let batch  = (a,b)=>{
    console.log(`${a} ${b}`)
}
setTimeout(()=>{
    console.log("This is Two")

},4000,"Hema","Coding")

let stopInterval = setInterval(()=>{
    console.log("This is set Interval")

},1000,"Hema","Coding")

setTimeout(()=>{
    console.log("stopped Interval")

    clearInterval(stopInterval)
},3000)

let callBackHell = (callback) => {
  setTimeout(() => {
    callback();
  }, 1000);
};
callBackHell(() => {
  console.log("Function 1");
  callBackHell(() => {
    console.log("Function 2");
    callBackHell(() => {
      console.log("Function 3 ");
    });
  });
});

let getPromise = new Promise((resolve,reject)=>{
    console.log("This is Promise")
    resolve("Success")
    // reject("This is rejected")
})

let newPromise = (number) => {
  return new Promise((resolve, reject) => {
    console.log(`This promise ${number}`)
    setTimeout(() => {
        resolve(`This is resolve ${number}`);
    }, 1000);
    // reject(`This is reject ${number}`)
  });
};
// newPromise(1).then((res)=>{
//     console.log(res)
// })
// newPromise(1).then((res)=>{
//     console.log(res)
// }).catch((rej)=>{
//     console.log(rej)
// })

newPromise(1).then((res) => {
  console.log(res);
  newPromise(2).then((res) => {
    console.log(res);
    newPromise(3).then((res) => {
      console.log(res);
    });
  });
});

let asyncFunction = async function () {
  console.log("This is Async function 1");
  await newPromise(1);
  console.log("This is Async function 2");
  await newPromise(2);
  await newPromise(3);
  await newPromise(4);
  await newPromise(5);
};
asyncFunction();




