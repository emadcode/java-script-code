// Function to add two numbers 
function add(num1, num2) {
    return num1 + num2;
}

// Function to subtract two numbers number 1- number 2
function subtract(num1, num2) {
    return num1 - num2;
}

// Function to multiply two numbers
function multiply(num1, num2) {
    return num1 * num2;
}

// Function to divide two numbers
function divide(num1, num2) {
    // Check if divisor is zero to avoid division by zero error
    if (num2 === 0) {
        return "Error: Division by zero!";
    }
    return num1 / num2;
}

// Example usage:
var num1 = 15;
var num2 = 5;

console.log("Addition:", add(num1, num2));        // Output: 15
console.log("Subtraction:", subtract(num1, num2)); // Output: 5
console.log("Multiplication:", multiply(num1, num2)); // Output: 50
console.log("Division:", divide(num1, num2));       // Output: 2
