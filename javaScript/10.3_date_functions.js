
// Date Functions

console.log("Date Functions ::");

let date = new Date();

console.log("getDate : ", date.getDate());
console.log("getMonth : ", date.getMonth() + 1);
console.log("getFullYear : ", date.getFullYear());
console.log("getDay : ", date.getDay());

console.log("getHours : ", date.getHours());
console.log("getMinutes : ", date.getMinutes());
console.log("getSeconds : ", date.getSeconds(), "\n");

// Set Date

let date1 = new Date();

date1.setDate(32);
date1.setMonth(14);
date1.setFullYear("2000");

console.log("getDate : ", date1.getDate());
console.log("getMonth : ", date1.getMonth());
console.log("getFullYear : ", date1.getFullYear());
