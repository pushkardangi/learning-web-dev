
// Variables(var, let and const)

var $America$ = 55;
let _hello = 43;
const pi = 3.1415;
console.log("var, let, const : ", $America$, _hello, pi, "\n");

// var -> can be re-declared
// let -> cannot be re-declared, but can be updated
// const -> cannot be re-declared and can be updated

// const declaration should be initialized
const num = 55;

// const num; -> num = undefined
// num = 55; -> error

// Data Types : bb ss nn u : BigInt bool string symbol null number undefined
// JS is a dynamically typed language, no need to give type

// Primitive Data Types
let int = 1;
let float = 2.2;
let char = 'a';
let string = 'hello world';
let undefined1;
let nul = null;
let bool_t = true;
let bool_f = false;
let symbol = Symbol(9);
let arr = ["hello", 3, 5.33, null, true, false];

console.log(int, " - ", typeof int);
console.log(float, " - ", typeof float);
console.log(char, " - ", typeof char);
console.log(string, " - ", typeof string);
console.log(undefined1, " - ", typeof undefined1);
console.log(nul, " - ", typeof nul);
console.log(bool_t, " - ", typeof bool_t);
console.log(bool_f, " - ", typeof bool_f);
console.log(symbol," - ", typeof symbol);
console.log(arr, " - ", typeof arr, "\n");

// Non Primitive Data Types : object
let person = {
    firstName: "John",
    lastName: "Doe",
    "favNumber": 535,
    age: 50
};

console.log(person, " - ", typeof person);
console.log(person.firstName, " - ", typeof person.firstName);
console.log(person.lastName, " - ", typeof person.lastName);
console.log(person.age, " - ", typeof person.age);
console.log(person["favNumber"], " - ", typeof person["favNumber"], "\n");

// Comments : 

// 1.  One line comment
/* 2. multi
line 
comment */


// Strings in Detail : 

let userName = "Pushkar";
let surname = 'Dangi';
let age = 21;

// we can use both single quote ('') and double quote("") for declaring string,
// but if you want to use  (') in a string you have to use double quote for string declaration and vice-versa.

// If you want to use both ('') and ("") in a string you can use back ticks(``) for string declaration.

// 1. joining words
console.log(userName + surname + age, "\n");

// 2. template literals
let main = `My name is ${userName} and I am ${age} years old.\n`;

// 3. string length
console.log(main + "Length of above string is - ", main.length, "\n");
// \n is counted as 1 character

// 4. escape sequence characters
// tab and newline - doesn't works in browser screen, but works in console
console.log("\tHello World\nHow are you all");

