
//declare array
let arr = new Array();

let fruits = new Array("Mango", "Apple", "Banana", "Orange", "Grapes");

let cars = ["Hyundai", "Scorpio", "Nano", "Bolero"];

// other variables to be used
let str = "Sample_String";

console.log("Array Functions ::\n");

// display array
console.log("fruits Array : ", fruits);

// length of an array
console.log("fruits.length : ", fruits.length);

// reverse an array
console.log("fruits.reverse() : ", fruits.reverse());

// delete element from end
console.log("fruits.pop() : ", fruits.pop());

// add element at end
fruits.push("Strawberry", "Coconut"); // returns length of array
console.log("fruits.push() : ", fruits);

// sort an array
console.log("fruits.sort() : ", fruits.sort());

// delete at beginning
fruits.shift(); // returns first deleted element
console.log("fruits.shift() : ", fruits);

// insert at beginning
fruits.unshift("Avocado", str); // returns length of new array
console.log("fruits.unshift() : ", fruits);

// add / remove elements from middle
fruits.splice(1, 1, "ADDED"); // index, how many elements to remove, what to add
console.log("fruits.splice() : ", fruits);

// Bonus Code : print array elements

for (let i = 0; i < fruits.length; i++) {
    print(fruits[i]);
}

function print(text) {
    process.stdout.write(text + " ");
}


