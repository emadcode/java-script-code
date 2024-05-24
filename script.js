// Define the function to calculate the perimeter of a rectangle
function calculateRectanglePerimeter(length, width) {
    // Calculate the perimeter using the formula
    let perimeter = 2 * (length + width);
    
    // Return the calculated perimeter
    return perimeter;
}

// Example usage of the function
let length = 5;  // Example length
let width = 3;   // Example width
let perimeter = calculateRectanglePerimeter(length, width);

console.log("The perimeter of the rectangle is: " + perimeter);
//    The function calculateRectanglePerimeter takes two parameters: length and width.
//Inside the function, it calculates the perimeter using the formula 2×(length+width)2×(length+width).