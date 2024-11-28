// let add = function(a,b){
//     console.log(a + b)
// }
// add(2,3);

// 1. Syntax

// let add1 = (a,b)=>{
//     return a +b
// }
// console.log(add1(10,23))

// One line

// let oneLine = (a, b) => a * b;

// console.log(oneLine(2, 6));

// let double = function(a){
//     return 2 * a
// }
// console.log(double(2))

// let double = a => 2 * a;
// console.log(double(3));

// let random = function(){
//     return Math.random()
// }
// console.log(random())

// let random = ()=>Math.random();
// console.log(random())

// Limitation

// let student = {
//     name:"Mahesh",
//     getName:()=>{
//         return `My Name is ${student.name}`
//     }
// }

// console.log(student.getName())

// let Person = (name)=>{
//     this.name = name
// }
// let person1 = new Person("Mahesh")
// console.log(person1.name)

// function objArgument() {
//   for (i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// }
// objArgument(1, 2, 3, 4, 5);

// // =================================

// let objArgument1 = (...arguments) => {
//   for (i = 0; i < arguments.length; i++) {
//     console.log(arguments[i]);
//   }
// };
// objArgument1(1, 2, 3, 4, 5);

// function outerFunction() {
//     let a = 10;

//   function innerFunction(){

//       console.log(a);
//     }
//     return innerFunction();
// }

// outerFunction();

let outerFunction = () => {
  let a = 12;
  console.log("Hello");
  return innerFunction = () => {
    // console.log(a)
    return a;
  };
};
let x = outerFunction();
console.log(x());
function sayHello(){
    console.log("Hello...")
}
function sayHi(){
    console.log("Hi...")
}

function add(a, b, callBack) {
  
    callBack();
  console.log(a + b);
}
let a = 2;
let b = 3;
add(a, b, sayHi);

add(a, b, sayHello);










