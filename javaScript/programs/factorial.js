// program to find the factorial of a number
const read = require("readline-sync");

// take input from the user
const number = parseInt(read.question("Enter an integer: "));

// checking if number is negative
if (number < 0) {
  console.log("Error! Factorial for negative number does not exist.");
}

// if number is 0
else if (number === 0) {
  console.log(`The factorial of ${number} is 1.`);
}

// if number is positive
else {
  let i = 1;
  let fact = 1;
  for (i = 1; i <= number; i++) {
    fact *= i;
  }
  console.log(`The factorial of ${number} is ${fact}.`);
}
