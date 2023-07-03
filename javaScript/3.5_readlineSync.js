// Read user data with the help of package -> readlineSync

const readlineSync = require("readline-sync");

let userName = readlineSync.question("What is your name : ");
let userAge = readlineSync.question("What is your age : ");


console.log(`Welcome, ${userName} to JavaScript World`);
console.log(`Your birth year : `,2023 - Number(userAge));