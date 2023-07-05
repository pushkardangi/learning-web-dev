// Short Circuiting

// Truthy and Falsy Value
// falsy value - null, undefined, empty string, 0, -0, NaN, false
// truthy value - values except all falsy value

// OR - search for the first truthy value and returns it, if truthy not found returns last falsy value
// AND - search for the first falsy value and returns it, if falsy not found returns last truthy value

console.log(`Boolean("text") -    `,Boolean("text"));
console.log(`Boolean("") -       `,Boolean(""));
console.log(`Boolean(0) -       `,Boolean(0));
console.log(`Boolean(null) -     `,Boolean(null));
console.log(`Boolean(undefined) - `,Boolean(undefined));
console.log("\n")

//-------------------------------------------------------

let firstName = "Pushkar";
let lastName = "Dangi";

console.log("OR -",null || firstName || lastName || null);
console.log("AND -",lastName && null && undefined);

console.log("\n")
//--------------------------------------------------------

let a = 12;
let b;

console.log("a + b = ",a + (b || 0));
