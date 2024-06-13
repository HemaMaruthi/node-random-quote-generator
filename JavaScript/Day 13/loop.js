// var count = 0;
// while (count <= 5) {
//   console.log(count);
// //   count = count + 1;
// count++;
// }

// 0<5
// 1<5
// 2<5
// 3<5
// 4<5
// 5<=5
// // 6<5 

// var balance = 10000;
// var  withdraw = 1500;
// var count = 0;
// while(balance>0){
//     console.log(balance);
//     balance = balance - withdraw;
//     count++;
//     console.log(count)
// }

// var count = 0;

// do{
//     console.log("Count: " + count);
//     count++;

// }while(count<=5){
//     console.log(count)

// }




// for(var count =0; count<=10; count++){
//     console.log(count + " count");
//     // if(count%2 !=0){
//     //     console.log(count)
//     // }
//     if(count == 5){
//         continue;
//     }
//     for(var i =0; i<=2; i++){
//         console.log(i + " Nested")
//     }
// }

// 0 to 100 ==> prime number


for(var i = 0; i<=100; i++){
    // console.log(i);
    if(i>2){
        // console.log(i);
        var count =0;
        // i=3
        // 2<3 ==> 3%2 =1 ==> count = 0;
        for(j=2; j<i; j++){             
            if(i%j == 0){
                // console.log(i , j + " its not a prime")
                count++;
            }
        }
        if(count == 0){
            console.log(i )
        }
    }
}
