// Nullish Coalescing (??)

// it only addresses [null and undefinded] value
// if the first value is null or undefined, take the next value

console.log("zero -",               0 ?? "HiddenKey");
console.log("NaN -",              NaN ?? "HiddenKey");
console.log("number -",            33 ?? "HiddenKey");
console.log("false -",          false ?? "HiddenKey");
console.log("empty string -",      "" ?? "HiddenKey", "\n");
console.log("null -",            null ?? "HiddenKey");
console.log("undefined -",  undefined ?? "HiddenKey");
