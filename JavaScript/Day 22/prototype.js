let person1 ={}
console.log(person1)
let person2 ={
    name:"Hema"
}
console.log(person2)
console.log(person2.hasOwnProperty("age"));

function Person(firstName,lastName){
this.firstName = firstName;
this.lastName = lastName;
this.fullName = function(){
    return `My Name is ${firstName} and last name ${lastName}`
}
}
let person3 = new Person("Mahesh", "coding");
let person4 = new Person("Hema", "coding");


Person.prototype.city = "HYD"
// person3.city ="HYD";
Person.prototype.fullName = function(){
    return `My Name is ${this.firstName} and last name ${this.lastName}`
}

function Child(dateOfBirth){
    // this.dateOfBirth = dateOfBirth;
}
Child.prototype.dateOfBirth = 11
let child1 = new Child(10);

Child.prototype.eating = function(){
    return `Eating food`;
}

Person.prototype.__proto__ = Child.prototype;
console.log(child1)
console.log(child1.eating()) 


// console.log(person3.hasOwnProperty(firstName))
console.log(person3)
console.log(person3.dateOfBirth)
console.log(person3.eating())

// console.log(person3.fullName())
// console.log(person4.fullName())



 
    
    

