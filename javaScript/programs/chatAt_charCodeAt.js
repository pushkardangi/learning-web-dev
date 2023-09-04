
let string = "Hello World";

for (let i = 0; i < string.length; i++) {
    charCode = string.charCodeAt(i);
    charCode += 2;
    process.stdout.write(String.fromCharCode(charCode));
}