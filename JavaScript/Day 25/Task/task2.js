Task1: Calculate Total Cost of Available Products
You have an array of product objects, where each product has a name, price, and a boolean indicating whether 
it is available. Your goal is to calculate the total cost of all available products.

const products = [
    { name: 'Laptop', price: 1000, available: true },
    { name: 'Phone', price: 500, available: false },
    { name: 'Tablet', price: 750, available: true },
    { name: 'Monitor', price: 300, available: true },
    { name: 'Keyboard', price: 100, available: false }
];

Steps to Solve:
Filter: Select products that are available.
Map: Extract the prices of the available products.
Reduce: Calculate the total cost of the available products.

-------------------------------------------------------------------------------


task 2:
Task: Analyze and Transform Student Data
You have an array of student objects, where each student has a name, age, and an array of scores. Your goal is 
to process this data to find out the average score of students who are older than 18 and have passed 
all subjects (a passing score is 60 or above). You also need to format the result to show the average score 
rounded to two decimal places.

const students = [
    { name: 'Alice', age: 19, scores: [85, 92, 78] },
    { name: 'Bob', age: 17, scores: [55, 60, 65] },
    { name: 'Charlie', age: 18, scores: [95, 88, 92] },
    { name: 'David', age: 20, scores: [72, 85, 90] },
    { name: 'Eve', age: 22, scores: [60, 65, 70] },
    { name: 'Frank', age: 21, scores: [95, 100, 99] }
];

Steps to Solve:
Filter: Select students who are older than 18 and have passed all subjects.
Map: Extract the average score for each selected student.
Reduce: Calculate the overall average score of these students.
Format: Round the final average score to two decimal places.


