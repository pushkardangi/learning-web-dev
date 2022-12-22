const fs = require("fs");

console.log("Reading from a file...\n");
let text = fs.readFileSync("file.txt","utf-8");

console.log("The content of the file is : ");
console.log(text);

text = text.replace("Hello","Good Morning");

console.log("\nWriting in a new file...");
fs.writeFileSync("file2.txt", text);

// write can create a file, when it does not exist
// then write the content in created file