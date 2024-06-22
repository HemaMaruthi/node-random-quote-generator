// let array = [1,2,3,4,5];
// // console.log(...array)

// 1.Exapanding

// let array1 = [1,2,3,4,5]
// let array = [...array1, 6,7,8,9]
// console.log(array)

// 2. Combining
// let array1 = [1,2,3,4,5]
// let array2 = [6,7,8,9,10]
// let array = [...array1,...array2]
// console.log(array)

// 3.Cloning => Shallow copy

// let originalArray = [1,2,3,4,5];
// let originalArray = [1,2,3,4,5,[6,7,8]];

// // let copiedArray = [...originalArray];
// // let copiedArray = JSON.parse(JSON.stringify(originalArray))
// let copiedArray = structuredClone(originalArray);
// // copiedArray.push(8);
// copiedArray[5].push(9);
// console.log(originalArray)
// console.log(copiedArray)

//4. String expand;
// let str = "Hema";
// console.log(str.split(""))
// console.log(...str)

// let obj1  = {a:1,b:2};
// let obj2 = {...obj1, c:3,d:4}
// console.log(obj2)

// let obj1  = {a:1,b:2};
// let obj2 = {c:3,d:4}
// let obj  = {...obj1,...obj2}
// console.log(obj)



// let originalObject = {a:1,b:2,add:{c:3,d:4}};
// // let copiedObject ={...originalObject};
// // let copiedObject = JSON.parse(JSON.stringify(originalObject))
// let copiedObject = structuredClone(originalObject)
// copiedObject.add.e=5;
// console.log(originalObject)
// console.log(copiedObject)

// function spredFunction(...args){
// // console.log(a + b +c)
// console.log(args)
// }
// let numbers = [1,2,3]
// // console.log(...numbers)
// spredFunction(...numbers)
// // spredFunction(1,2,3)












// let array = [1,2,3,4,5,5,56,8,9,6]
// // let [a,b,c,d,e]= array;
// let [a,b,...args]= array;

// console.log(args)

let object = {a:1,b:2,c:3};
let {a,...c}= object;
console.log(c)



