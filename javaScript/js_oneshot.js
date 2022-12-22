// Javascript Notes (https://www.youtube.com/watch?v=hKB-YGF14SY)

// 1. Ways to print in JavaScript
// console.log("Hello World!");  // displaying text in console
// alert("Download an anti-virus!! ASAP");
// document.write("This is document write");  // write text in webpage

// console.log("-------------------------------------------------------");

// 2. JavaScript Console API
// console.log("Hello World!", 8 + 2, "The end!");
// console.warn("This is Warning"); // giving warning in console
// console.error("This is error"); // giving error in console

// console.log("-------------------------------------------------------");

// 3. Other Functionalities in console
// console.clear() // to clear the console
// console.assert(4==6) // to give an assertion in console

// console.log("-------------------------------------------------------");

// 4. Variables in JS
// - Containers to store data values

// var number1 = 20;
// var number2 = 80;
// console.log(number1 + number2);

// console.log("-------------------------------------------------------");

// 5. Data types in JS

// String
var str1 = "This is a string";
var str2 = "this is a string";

// console.log(str1);

// Number
var num1 = 46;
var num2 = 14.15;

// Objects
var marks = {
  tom: 99,
  jerry: 89,
  harry: 96,
  Shyam: 99.91,
};

// console.log(marks);

// Booleans

var a = true;
var b = false;
// console.log(a);
// console.log(b);

// undefined
//-> when no value is assigned to a variable
//-> It means the value does not exist in the compiler.

var ab; // ab is also undefined
var und = undefined;
// console.log(ab);
// console.log(und);

// null
//-> It is the intentional absence of the value.
//-> It is one of the primitive values of JavaScript.

var n = null;
// console.log(n);

/*
At a very high level, there are two types of data types in JavaScript
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: Arrays and Objects
*/

// Array
var arr = [1, 2, "harry", 4, 5];
// console.log(arr)
// console.log(arr[0])

// console.log("-------------------------------------------------------");

// 6. Operators in JavaScript

var m = 50;
var n = 40;

// Arithmetic operators
// console.log("The value of m + n = ",m+n);  // 90
// console.log("The value of m - n = ",m-n);  // 10
// console.log("The value of m * n = ",m*n);  // 2000
// console.log("The value of m / n = ",m/n);  // 1.25

//Assignment operators
var c = m;
// c += 2;          // c = c + 2;  // 52
// c -= 2;          // c = c - 2;  // 50
// c *= 2;          // c = c * 2;  // 100
// c /= 2;          // c = c / 2;  // 50
// console.log(c);

// Comparison operators
var x = 28;
var y = 84;
// console.log("x == y : ",x==y);  // false
// console.log("x > y : ",x>y);    // false
// console.log("x < y : ",x<y);    // true
// console.log("x >= y : ",x>=y);  // false
// console.log("x <= y : ",x<=y);  // true

// Logical operators

// Logical And / &&
// console.log("true && true : ",true && true);       // true
// console.log("true && false : ",true && false);     // false
// console.log("false && true : ",false && true);     // false
// console.log("false && false : ",false && false);   // false

// Logical Or / ||
// console.log("true || true : ",true || true);       // true
// console.log("true || false : ",true || false);     // true
// console.log("false || true : ",false || true);     // true
// console.log("false || false : ",false || false);   // false

// Logical Not
// console.log(!true);  // false
// console.log(!false); // true

// console.log("-------------------------------------------------------");

// 7. Functions

//implement DRY(Do Not Repeat Yourself) principle

function avg(a, b) {
  return (a + b) / 2;
}

c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log("c1 = ",c1," and c2 = ",c2);

// console.log("-------------------------------------------------------");

// In Chrome
// console.log(3);    // Integer in blue colour = number
// console.log("3");  // Integer in black colour = string
// console.log('3');  // Integer in black colour = string

// Var ::
// var a = 44;
// it's scope is function level
// (known within a function where it has been declared)

// when you declare variable with var keyword globally,
// it get attached with window object, that can affect our front end application

// Let ::
// let j = 0;
// 1. it's scope is block level scope only.
// 2. use let keyword so that it will not get attached to window object

// Const ::
// const mm = 0;
// mm = 43;
// it gives an error because the value of mm can't be changed

// console.log("-------------------------------------------------------");

// 8. Conditional in Javascript

// A. If Else

var age = 18;
// if (age > 18) {
//   console.log("You can drive");
// }
// else {
//   console.log("You can't drive");
// }

// B. If - Else If - Else ladder

// if(age>18){
//     console.log("You Can Drive ");
// }
// else if(age==18){
//     console.log("You Can Learn To Drive ");
// }
// else{
//     console.log("You Can't Drive")
// }

// console.log("-------------------------------------------------------");

// 9. Loops in Javascript

var ar = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(ar);                                  // Printing whole array
// console.log("Length of array is : ",ar.length);   // Printing the length of array

// A. For loop
// for (var i = 0; i < ar.length; i++) {
//   console.log(ar[i]);
// }

// B. For Each loop
// ar.forEach(function (element) {
//   console.log(element);
// });

// C. While loop
// let j = 0;
// var app = [1, 2, 3, 4, 5, 6, 7];
// while (j < app.length){
//     console.log(app[j]);
//     j++;
// }

// D. Do while loop
// let j = 10;
// var app = [1, 2, 3, 4, 5, 6, 7];
// do {
//   console.log(app[j]);
//   j++;
// } while (j < app.length);

// console.log("-------------------------------------------------------");

// Continue
// It leaves the current iteration and moves to next iteration

// Break
// It moves out of the loop

// console.log("-------------------------------------------------------");

// In JS you can store whatever data type you want in an array

let arr1 = ["Fan", "Camera", "Mat", 43, null, true];
// Methods of array

console.log(arr1.length);  // shows length of the array = total elements
arr1.pop();                // remove last value from the array
arr1.push("pushkar");      // add an element at last of the array
arr1.shift();              // remove first element of the array
arr1.unshift("Apple");     // add "Apple" element at beginning of array
console.log(arr1.unshift("Apple"));// returns the length of new array formed after adding "Apple"

console.log(arr1);

// and many more...
