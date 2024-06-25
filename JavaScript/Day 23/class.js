class Parent {
  constructor(firstName,lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  fullName() {
    return `My Name is ${this.firstName}`
  }
  static sayHi(){
    return "Hello everyone..."
  }
}

class Child extends Parent{
    constructor(firstName,lastName,role){
        super(firstName,lastName)
        this.role = role;
    }
    getRole(){
        return `My role is ${this.role}`
    }
}

class GrandChild extends Child{

}
// let parent1 = new Parent("Hema");

// console.log(parent1);
// console.log(parent1.fullName());
// // console.log(parent1.sayHi());
// console.log(Parent.sayHi());
// let child1 = new Child("Mahesh","Coding","Student")
// console.log(child1)
// console.log(child1.role)
// console.log(child1.getRole())

// let grandChild1 = new GrandChild("Mahesh","Coding","Student")
// console.log(grandChild1)


// class Person {
//     #name = "";
//     constructor(name){
//         this.#name = name
//     }
//     getName(){
//         return `My Name is ${this.#name}`
//     }
// }

// let person1 = new Person("Hema")
// console.log(person1)
// console.log(person1.getName())

let emp = {
    name1:"Mahesh",
    getName:function(){
        return "This is my name";
    }
}

class EmpInfo{
    constructor(name){
        this.name = name
    }
}
Object.assign(EmpInfo.prototype, emp);
let emp1 = new EmpInfo("Hema");
console.log(emp1);
console.log(emp1.name1);
console.log(emp1.getName());





