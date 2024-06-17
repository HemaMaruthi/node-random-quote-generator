// Task 6:
// Find All Pairs of Elements with a Given Sum
// Write a program that finds all pairs of elements in an array that add up to a specific target sum

// out put:  Output: [[1, 7], [2, 6], [3, 5]]

var array = [1, 2, 3, 4, 5, 6, 7];
var target = 10
var matrix = [];
for(i=0;i<array.length;i++){
    // console.log(array[i])
    for(j=i+1;j<array.length;j++){
        // console.log(array[j]);
        if(array[i] + array[j] == target){
            // console.log()
            matrix.push([array[i],array[j]])
        }
    }
}
console.log(matrix)








