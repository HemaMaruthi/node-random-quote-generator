
Certainly! Here are some interview tasks related to the Spread Operator, Rest Operator, and Destructuring in JavaScript. These tasks are designed to test your understanding and ability to apply these concepts in practical scenarios.

Tasks
Task 1: Using Spread Operator
Task Description:

Write a function called mergeArrays that takes any number of arrays as arguments and returns a single array containing all the elements of the input arrays.
Ensure that the result does not contain any duplicate values.

function mergeArrays(...arrays) {
    // Your code here
}

const array1 = [1, 2, 3];
const array2 = [3, 4, 5];
const array3 = [5, 6, 7];
const result = mergeArrays(array1, array2, array3);
console.log(result); // Output: [1, 2, 3, 4, 5, 6, 7]

--------------------------------------------------------
Task 2: Using Rest Operator
Task Description:

Write a function called calculateSum that accepts any number of arguments and returns their sum.
Ensure that the function handles both numbers and arrays of numbers correctly.

function calculateSum(...args) {
    // Your code here
}

console.log(calculateSum(1, 2, 3)); // Output: 6
console.log(calculateSum(1, [2, 3], 4)); // Output: 10

-----------------------------------------------------------
Task 3: Array Destructuring
Task Description:

Write a function called swapFirstAndLast that takes an array as an argument and returns a new array with the first and last elements swapped.
Use array destructuring to achieve this.

function swapFirstAndLast(array) {
    // Your code here
}

const array = [1, 2, 3, 4, 5];
const result = swapFirstAndLast(array);
console.log(result); // Output: [5, 2, 3, 4, 1]

----------------------------------------------------------

Task 4: Object Destructuring
Task Description:

Write a function called extractUserInfo that takes a user object as an argument and returns a new object containing only the name, age, and email properties.
Use object destructuring to achieve this.

function extractUserInfo(user) {
    // Your code here
}

const user = {
    name: 'Alice',
    age: 25,
    email: 'alice@example.com',
    address: '123 Main St'
};
const result = extractUserInfo(user);
console.log(result); // Output: { name: 'Alice', age: 25, email: 'alice@example.com' }

---------------------------------------------------------
Task 5: Nested Destructuring
Task Description:

Write a function called extractCoordinates that takes an object representing a point with nested objects for latitude and longitude.
Return an object containing only the latitude and longitude values.
Use nested destructuring to achieve this.

function extractCoordinates(point) {
    // Your code here
}

const point = {
    location: {
        latitude: 40.7128,
        longitude: -74.0060
    },
    name: 'New York City'
};
const result = extractCoordinates(point);
console.log(result); // Output: { latitude: 40.7128, longitude: -74.0060 }
