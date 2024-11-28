var jewelleryBox = ["Rings", "Nacklace","Earrings","Bracelet"];
// console.log(jewelleryBox[0])

// jewelleryBox.push("Watch", "Chains")

// jewelleryBox.pop();
// jewelleryBox.pop();

// jewelleryBox.shift();
// jewelleryBox.shift();
// jewelleryBox.unshift("Watch", "Chains")

// var removeItem = jewelleryBox.slice(2,3)
// console.log(removeItem)

console.log( jewelleryBox.splice(2,1, "Watch", "Chains"));
// console.log(jewelleryBox.indexOf("Earrings"));
// console.log(jewelleryBox.join("Edg, "))

// var ele = ["Banana", "Graps"]
// var box = ele.concat(jewelleryBox)
// console.log(box)

// var string = "Hello"; // olleH
// console.log(string)

// var call = string.split("").reverse()
// console.log(call)
// var jewelleryBox = ["Rings", "Nacklace","Earrings","Bracelet"];
// console.log(jewelleryBox[0]);
// console.log(jewelleryBox[1]);
// console.log(jewelleryBox[2]);
// console.log(jewelleryBox[3]);



// for(i=0;i<jewelleryBox.length;i++){
//     // console.log(jewelleryBox[i]);
//     if(jewelleryBox[i].length>5){
//         console.log(jewelleryBox[i])
//     }
//     else{
//         console.log(jewelleryBox[i], "Below 5")
//     }

// }

// var num = [12,55,44,33,8];

// for(i=0; i<num.length;i++){
//     // console.log(num[i]);
//     if(num[i]%2 == 0){
//         console.log(num[i])
//     }
// }


for(i=0; i<=5; i++){

    console.log(i, "Parent")
    for(j=0;j<=2;j++){
        console.log(j, "Child")
        for(k=0; k<=1;k++){
            console.log(k, "Grand child")
        }
    }
}