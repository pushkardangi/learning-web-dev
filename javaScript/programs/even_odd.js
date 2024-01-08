const readline = require("readline-sync");

let size = Number(readline.question("Enter Size of array : "));
let num = 0;

let even_sum = 0;
let odd_sum = 0;

for (let i = 0; i < size; i++) {
  num = Number(readline.question("Enter Number : "));

  if (num % 2 == 0) {
    even_sum = even_sum + num;
  } else {
    odd_sum = odd_sum + num;
  }
}

console.log("Even Sum : " + even_sum);
console.log("Odd Sum : " + odd_sum);
