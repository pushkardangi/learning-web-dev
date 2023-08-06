
console.log("Control Statements - \n");

// continue, break and return

// for loop
// for each
// for of
// for in

// while loop
// do while loop

// if else
// if else if else
// switch case


// For Each loop : iterate over arrays
let fruits = ["Mango", "Banana", "Apple", "Orange", "Guava"];

fruits.forEach((element) => {
    console.log("for each", element);
});
console.log();

// For Of loop : iterate over arrays
for (element of fruits) {
    console.log("for of", element);
}
console.log();

// For In Loop : iterate over objects 
let student = {
    name: "Pushkar Dangi",
    age: 20,
    school: "SCA"
}

for (key in student) {
    console.log(`The ${key} of student is ${student[key]}.`)
}
console.log();

// For loop
for(let i = 0; i < fruits.length; i++) {
    console.log("for", fruits[i]);
}
console.log();

// While loop
let i = 0;
while (i < fruits.length) {
    console.log("while", fruits[i]);
    i++;
}
console.log();

// Do While loop
i = 0;
do {
    console.log("do while", fruits[i]);
    i++;
} while (i < fruits.length);
console.log();

// If and Else condition
let person_age = 100;

if (18 <= person_age) {
    console.log("You are eligible for driving");
}
else {
    console.log("You cant Drive");
}

// If, Else If, Else Ladder
let age = 90;

if (age <= 10) {
    console.log("You are too little to drive");
}
else if (age < 18) {
    console.log("Not yet grown up.");
}
else if (age <= 80) {
    console.log("You can drive.");
}
else {
    console.log("Please Rest.");
}

// Switch Conditionals
let day = new Date();

switch (day.getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
        break;
    default:
        day = "Enter correct input";
        break;
}

console.log("Today is", day);
