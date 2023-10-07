const numbers = [5, 2, 9, 1, 5, 6];

// Use the sort method with a custom comparison function to sort in descending order
numbers.sort(function(a, b) {
    return b - a; // Compare b to a for descending order
});

console.log(numbers); // Output: [9, 6, 5, 5, 2, 1]

//Ouput show in the console part of the browser 
// It will aviable in the Inspect of the browser 