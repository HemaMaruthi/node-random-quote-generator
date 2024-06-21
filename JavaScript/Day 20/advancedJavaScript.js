// Var let const
//1. function Scope and Block scope
// var d =25;
// Scope()

// function Scope(){
//     var a =10;
//     if(true){
//         let b = 20;
//         const c = 30;
//         console.log(a)
//     }
//     // console.log(c)
//     // console.log(b)
// }
// console.log(d)

// 2. Hosting

// console.log(a)
// var a = 10;

// // console.log(b)
// let b = 20;

// console.log(c)
// const c = 30;

// {
//     console.log(a);
//     const a =10;
//     console.log(a)
// }
// console.log("Hello")

// var a = 10;
// a = 20;
// console.log(a)

// let b = 10;
// b = 25;
// console.log(b)


// const c = 5;
// c = 55;
// console.log(c)


// var a = 10;
// var a = 20;
// console.log(a)

// // let b = 20;
// // let b = 30;
// // console.log(b)

// const c = 25;
// const c = 30;
// console.log(c)


// let name = "Mahesh";
// let age = 20
// // console.log(`${name}`)

// let message = "My name is " + name + " and " + age;
// let message1 = `My name is ${name} and ${age}`;

// console.log(message)
// console.log(message1);

// let text = "Good evening everyone.
//  How is the day";
// let text1 = `Good 
// evening everyone.
//  How is
//   the 
//   day`;
// // console.log(text)
// // console.log(text1)

// function tagTemp(string,name){
//     console.log(string)
// console.log(name)
// }
// let name = "Mahesh"
// tagTemp`My name is ${name}`;


// let a = Symbol("Mahesh")
// console.log(a)
// let email = Symbol()
// let employee = {};
// employee.name = "Hema";
// employee.age = 20;
// employee[email]= "Hema@gmail.com";

// console.log(employee)
// console.log(Object.keys(employee));

// for(let key in employee){
//     console.log(key)
// }

// let set = new Set();
// set.add(2);
// set.add(3);
// set.add(4);
// set.delete(4)
// set.clear()
// let check = set.has(4);
// console.log(check)
// console.log(set)

let map = new Map();

let obj = new Obj();
console.log(obj)
map.set("Name", "Hema");
map.set(1, "one");
map.set(true,"Boolean")
map.delete(1)
map.clear();
console.log(map.has(1))
console.log(map)
console.log(map.get("Name"))



