// var num1 = 2;
// var num2 = 3;

// var sum = num1 + num2;

// console.log(sum);

// var num3 = 25;
// var num4 = 31;

// var sum2 = num3 + num4;

// console.log(sum2);

// function sumFunction(a,b){
//     console.log(a+b)
// }
// sumFunction(2,3);
// sumFunction(21,32);
// sumFunction(213,312);

// function juiceMixer(fruitA, fruitB, fruitC){
//     var juice = "Juice made with " + fruitA + " and " +  fruitB + " " + fruitC;
//     console.log(juice)
// }

// juiceMixer("Apple", "Graphs");
// juiceMixer("Apple1", "Graphs1", "Mango");
// juiceMixer(2, 5 );

// var juiceMixer = function (fruitA, fruitB, fruitC){
//     var juice = "Juice made with " + fruitA + " and " +  fruitB + " " + fruitC;
//     console.log(juice)
// }

// juiceMixer("Apple", "Graphs");
// juiceMixer("Apple1", "Graphs1", "Mango");
// juiceMixer(2, 5 );


// var juiceMix = function juiceMixer(fruitA, fruitB, fruitC){
//     var juice = "Juice made with " + fruitA + " and " +  fruitB + " " + fruitC;
//     console.log(juice)
// }

// juiceMix("Apple", "Graphs");
// juiceMix("Apple1", "Graphs1", "Mango");
// juiceMix(2, 5 );

// var msg = "Hello Function";
// greet("Mahesh");
// function greet(name){
//     console.log(name)
// }



// var greet = function (name){  
//     console.log(name);
// }
// greet("Mahesh");

// (function(name){
//     console.log(name)
// })("Mahesh")



// var arr = [1,3,55,5,6];

// var polindrome = function(str){
//   var string =   str.split("").reverse().join("");
//   console.log(string == str)
// }
// polindrome("Hema");
// polindrome("racecar");
// polindrome("mahe")

var fabinnaci = function(name){
    var a = 0;
    var b = 1;
    for(i=0;i<name;i++){
        var sum = a + b;
        // console.log(sum, " Sum");
        a = b;
        // console.log(a, " a");
        b = sum;
        console.log(b, "Fabi")
    }
}
fabinnaci(15);
fabinnaci(10);










