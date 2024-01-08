// Array - Non-Primitive Data Type

// declare and initialize array
let arr = new Array("one", "two", "three");

let fruits = ["Mango", "Apple", "Banana", "Orange", "Grapes"];

console.log("Array Functions ::");

// display array
console.log("fruits Array : ", fruits);

// length of an array
console.log("fruits.length : ", fruits.length);

// reverse an array
console.log("fruits.reverse() : ", fruits.reverse());

// includes - returns boolean
console.log("fruits.includes('Mango') : ", fruits.includes("Mango"));

// delete element from end
fruits.pop(); // returns deleted element
console.log("fruits.pop() : ", fruits);

// add element(s) at end
fruits.push("Strawberry", "Coconut"); // returns length of new array
console.log("fruits.push() : ", fruits);

// sort - updates original array
console.log("fruits.sort() : ", fruits.sort());

// delete at beginning
fruits.shift(); // returns first deleted element
console.log("fruits.shift() : ", fruits);

// insert at beginning
fruits.unshift("Avocado", "DragonFruit"); // returns length of new array
console.log("fruits.unshift() : ", fruits);

// add / remove elements from middle
fruits.splice(1, 1, "ADDED"); // index, how many elements to remove, what to add
console.log("fruits.splice() : ", fruits);

// slice - returns new array
let slicedArr = fruits.slice(1, 3); // start index,  end index (excluded) (optional)

// combine multiple arrays

let newArr = ["newMango", "newApple", "newBanana"];
let combinedArr = fruits.concat(newArr, newArr);
console.log("fruits.concat() : ", combinedArr);

// sort the numbers in ascending and descending order
let numbers = [8, 3, 2, 6, 1, 5, 20, 15];
console.log("numbers.sort() : ", numbers.sort())

// ascending order
numbers.sort((a, b) => {
    return a - b;
});
console.log("numbers.sort() : ", numbers);

// descending order
numbers.sort((a, b) => {
    return b - a;
});
console.log("numbers.sort() : ", numbers);

// access array elements

for (let i = 0; i < fruits.length; i++) {
    print(fruits[i]);
}

function print(text) {
    process.stdout.write(text + " ");
}
console.log();

// array of arrays and objects
let arr1 = ["Mango", ["Apple", "Banana", "Orange", "Grapes"], { name: "Mango", price: 100 }];

// for let of loop - returns elements
for (let element of arr1) {
    console.log("for let of : ", element);
}

// for in loop - returns index
for (let index in arr1) {
    console.log("for in : ", arr1[index]);
}

//--------------------------------------------

// shallow copy - arr3 stores reference of arr2
// if arr2 is changed, arr3 will also be changed and vice versa
let arr2 = [1, 2, 3];
let arr3 = arr2;

console.log("\narr2 : ", arr2);
console.log("arr3 : ", arr3);

arr3.push(4);
console.log("updated arr2 : ", arr2)
console.log("updated arr3 : ", arr3)

// spread operator - arr4 stores copy of arr2
// if arr2 is changed, arr4 will not be changed and vice versa
let arr4 = [...arr2];

console.log("arr2 : ", arr2);
console.log("arr4 : ", arr4);

arr4.push(5);
console.log("updated arr2 : ", arr2)
console.log("updated arr4 : ", arr4)

//--------------------------------------------

// other usecase of spread operator

let userName = "John Doe";

let arr5 = [...userName];

console.log("\narr5 : ", arr5);
