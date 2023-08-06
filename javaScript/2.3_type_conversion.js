
console.log("Type Conversion - \n");

// Implict coercion (automatic type conversion)
let x = 10;
let y = "2";
console.log(`x = 10 and  y = "2"`);
console.log("x + y = ", x + y);
console.log("x - y = ", x - y);
console.log("x * y = ", x * y);
console.log("x / y = ", x / y);
console.log("x ** y = ", x ** y, "\n");

let p = "10";
let q = "2";
console.log(`p = "10" and q = "2"`);
console.log("p + q = ", p + q);
console.log("p - q = ", p - q);
console.log("p * q = ", p * q);
console.log("p / q = ", p / q);
console.log("p ** q = ", p ** q, "\n");

// Explicit coercion (manual type conversion)

// Number()
let a = "10";
let b = "11";
console.log(`a = "10" and b = "11"`);
console.log("Number(a) + Number(b) = ", Number(a) + Number(b), "\n");

console.log(`Number("abc") = `, Number("abc"), "\n");

// String() or toString()
a = 10;
b = 11;
console.log(`a = 10 and b = 11`);
console.log("a.toString() + String(b) = ", a.toString() + String(b), "\n");

// Boolean()
console.log(`Boolean("a") = `, Boolean("a"));
console.log(`Boolean(-10) = `, Boolean(-10));
console.log(`Boolean(22) = `, Boolean(22));
console.log(`Boolean(0) = `, Boolean(0));
console.log(`Boolean(-0) = `, Boolean(-0));
console.log(`Boolean("") = `, Boolean(""));
