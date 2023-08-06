
// Operators in JavaScript

// Operand - entities on which operators operate
// Operators - symbols that are used to perform operations on operands
// In 3 + 4, '+' is the operator and 3,4 are operands

// 1. unary operator - It has single operand (x = -x)
// Examples of unary operator
// (++a) (a++) (--a) (a--)

// 2. binary operator - It has two operand (x = x + 6)
// Examples of binary operator
// let sum = 456 + 8;

// Arithmetic Operators
var a = 10;
var b = 2;
console.log("a = 10 and b = 2");
console.log("Arithmetic Operators - ");

console.log("Addition : ", a + b);
console.log("Subtraction : ", a - b);
console.log("Multiplication : ", a * b);
console.log("Division : ", a / b);
console.log("Modulus : ", a % b);
console.log("Exponent : ", a ** 3, "\n");

// Pre and Post Increment and Decrement
console.log("a++ : ", a++);
console.log("++a : ", ++a);
console.log("a-- : ", a--);
console.log("--a : ", --a, "\n");

// Bitwise Operators
console.log("a = 10 and b = 2");
console.log("Bitwise Operators : ");
console.log("(a & b) : ", a & b);
console.log("(a | b) : ", a | b);
console.log("(~a) : ", ~a, "\n");

// Assignment Operators
console.log("a = 10 and b = 2");
console.log("Assignment Operators : ");
console.log("a = a + b : a += b : ", a += a);
console.log("b = b - a : b -= a : ", b -= b, "\n");

// Comparison Operators
console.log("a = 10 and b = 2");
console.log("Comparison Operators : ");
console.log("a < b : ", a < b);
console.log("a > b : ", a > b);
console.log("a <= b : ", a <= b);
console.log("a >= b : ", a >= b);
console.log("a == b : ", a == b);
console.log("a != b : ", a != b);
console.log("a === b : ", a === b);
console.log("a !== b : ", a !== b, "\n");

// ascii code is compared
console.log("'apple' > 'banana' : ", ('apple' > 'banana'));
console.log("'glowing' > 'glow' : ", ('glowing' > 'glow'));
console.log("'2' > '3' : ", ('2' > '3')); // unicode is compared
console.log("1 > null : ", 1 > null);
console.log("null == undefined : ", null == undefined);
console.log("null === undefined : ", null === undefined, "\n");

// Logical Operators
console.log("a = 10 and b = 2");
console.log("Logical Operators : ");
console.log("(a == b) && (a > b) : ", ((a == b) && (a > b)));
console.log("(a == b) || (a > b) : ", ((a == b) || (a > b)));
console.log("!a : ", (!-1), "\n");

// Ternary Operator
console.log("Ternary Operators : ");
let bit;
console.log(`bit = ${bit} ,`, (bit ? "it's True" : "it's False"));
console.log("cond = true", (true ? 1 : 0), "\n");

let marks = 81;
let result = marks > 80 ? "A+": marks > 60 ? "A": marks > 40 ? "B": marks > 32 ? "C": "fail";
console.log("The result is : ", result);
