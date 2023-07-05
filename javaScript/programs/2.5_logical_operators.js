// read three strings from the user and print the smallest one

const read = require("readline-sync");

const firstString = read.question("Enter first string : ");
const secondString = read.question("Enter second string : ");
const thirdString = read.question("Enter third string : ");

const firstStrLen = firstString.length;
const secondStrLen = secondString.length;
const thirdStrLen = thirdString.length;

if(firstStrLen < secondStrLen && firstStrLen < thirdStrLen){
  console.log(`${firstString} is the smallest string.`)
} else if(secondStrLen < firstStrLen && secondStrLen < thirdStrLen){
  console.log(`${secondString} is the smallest string.`)
} else if(thirdStrLen < firstStrLen && thirdStrLen < secondStrLen){
  console.log(`${thirdString} is the smallest string.`)
} else{
  console.log("Found 2 or more strings of equal length.")
}
