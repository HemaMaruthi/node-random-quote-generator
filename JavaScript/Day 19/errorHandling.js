function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

try {
  let result = divide(4, 0);
} catch (error) {
  console.error(error.message);
}

