
let str = "PushkAR Pushkar";
let str1 = "Dangi";

console.log("str : ", str);
console.log("str1 : ", str1, "\n");

// Fetching character from string through index

console.log("str[0] : ", str[0]);
console.log("str[1] : ", str[1], "\n");

// Iterating over string

for (let char of str)
{
    console.log(char);
}
console.log();

// String Function
console.log("String Functions ::\n");

console.log("charAt : ", str.charAt(0));

console.log("concat : ", str.concat(" hello ", "world ", str1));
console.log("concat : ", str.concat(" Microsoft"));

console.log("toLowerCase : ", str.toLowerCase());
console.log("toUpperCase : ", str.toUpperCase());

console.log("includes : ", str.includes("Pushkar"));

console.log("indexOf : ", str.indexOf("r", 3));
// return index of first occurence of "r" from index 3
// if not present return -1

console.log("lastIndexOf : ", str.lastIndexOf("a")); // return index of last occurence

console.log("match : ", str.match("ar")); // return array of matched string
console.log("match : ", str.match(/ar/g));
console.log("match : ", str.match(/ar/i));
console.log("match : ", str.match(/ar/gi)); // global, case insensitive

console.log("replace : ", str.replace("Push", "Hello"));

console.log("search : ", str.search("kar"));

console.log("split : ", str.split(" ")); // return array of words in string

console.log("slice : ", str.slice(0, 5)); // 5 excluded
console.log("substring : ", str.substring(0, 5)); // 5 excluded
console.log("substring : ", str.substring(5)); // from 5 to last
// console.log("substr : ", str.substr(2, 5)); // index 2 to 5 letters // deprecated

console.log("valueOf : ", str.valueOf()); // return string value

// trim function- remove white spaces from starting and end points
// it does not remove white-spaces from middle of the string
let string4 = "      a string   with   white  spaces    ";
console.log(string4.trim());

// character ASCII code find out 
let char2 = str1.charCodeAt(0);
console.log("charCodeAt : ", char2, "\n");

// is Not a Number
console.log("isNaN(33) : ", isNaN(33))
console.log("isNaN(str) : ", isNaN(str));
console.log(`isNaN("33") : `,isNaN("33"))
console.log(`isNaN("Pushkar") : `, isNaN("Pushkar"))
console.log(`isNaN("33Pushkar") : `, isNaN("33Pushkar"), "\n")
