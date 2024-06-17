// var student = {
//     name:"Hema",
//     age:12,
//     greet:function(){
//         console.log("Welcome to Javascript")
//     }
// }
// console.log(student)

// var person = new Object();

// person.name = "Mahesh";
// person.age = 22;
// person.greet = function(){}

// console.log(person);

// function Person(n,e){
//     this.name = n,
//     this.age = e
// }

// var person1 = new Person("Hema",21);
// var person2 = new Person("Mahesh",23);

// console.log(person1);
// console.log(person2);

// var student = {
//     name:"Hema",
//     age:12,
//     greet:function(){
//         console.log("Welcome to Javascript")
//     }
// }

// console.log(student.name)
// console.log(student.age)

// student.name = "Coding";
// delete student.age
// console.log(student)

// console.log(student["name"])
// student["age"] = 20;
// delete student["greet"];

// var course = "age";
// console.log(student.age)
// console.log(course)
// console.log(student.course)
// // student.age

// console.log(student[course])

// console.log(student.age)
// console.log(student["age"])

// var studentAge = "age";

// console.log(student.studentAge)
// // student.age
// console.log(student[studentAge])

// console.log(student)

var student = {
  name: "Hema",
  age: 12,
  greet: function () {
  return "Welcome to Javascript";
  },
  address: {
    hno: 123,
    street: "Street",
  },
  contact: {
    email: "hema@gmail.com",
    phone: 123655,
  },
};
// console.log(student["greet"]())
// for(var key in student){
//     console.log(student[key])
// }

console.log(student.address.hno)
console.log(student["address"]["street"])
// console.log(student.greet())
// for(var key in student){
//     // console.log(student[key]())
//     // console.log(typeof student[key])
//    if(typeof student[key] == "function"){
//     console.log(student[key]())
//    }
    
// }

// console.log(Object.keys(student))
// console.log(Object.values(student))
// console.log(Object.entries(student))

