
// Hoisting - is JavaScript's default behavior of moving declarations to the top.
// Variable declarations are hoisted before function declarations.
// Temporal Dead Zone(TDZ) - is a time span between variable creation and its initialization where they cannot be accessed.

// with var
console.log("x : ", x); // x = undefined
var x = 10;
console.log("x : ", x, "\n");

// with let
// let are also hoisted. But cannot be accessed before (initialization / before TDZ ends)
// console.log("y : ", y);
// let y = 20;

// with const
// const are also hoisted. But cannot be accessed before (initialization / before TDZ ends)
// console.log("z : ", z);
// const z = 30;

// with functions

console.log("add : ", add(10, 20));

function add (a, b) {
    return a + b;
}