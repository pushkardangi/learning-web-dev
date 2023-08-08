
// Math Functions

console.log("Math Functions ::\n");

console.log("E : ", Math.E);
console.log("PI : ", Math.PI);
console.log("LN2 : ", Math.LN2);
console.log("SQRT1_2 : ", Math.SQRT1_2);
console.log("LOG2E : ", Math.LOG2E);

let arr = [12, 33, 55, 34, 36, 3, 34];

console.log("min : ", Math.min(...arr)); // finding min using spread operator
console.log("max : ", Math.max(...arr));

console.log("min : ", Math.min(212, 55, 34, 32, 4));
console.log("max : ", Math.max(212, 55, 34, 32, 4));

console.log("floor : ", Math.floor(99.75)); // truncates the decimal part of number
console.log("round : ", Math.round(99.45)); // if num >= 0.5 then round to next integer
console.log("ceil : ", Math.ceil(99.25)); // round to next integer

console.log("random : ", Math.random() * 100);

// random number between 50 - 60
let a = 50;
let b = 60;
let rand_50_60 = a + (b - a) * Math.random();
console.log("random_50_60 : ", rand_50_60);

console.log("pow : ", Math.pow(2, 4));
console.log("sqrt : ", Math.sqrt(625));

// returns +ve number
console.log("abs: ", Math.abs(-1));
console.log("abs: ", Math.abs(1));
