
let obj = {
    name: "Pushkar",
    age: 21,
    school: "SCA",
    village: "Home"
}
console.log(obj);

let jsonStr = JSON.stringify(obj);
console.log(jsonStr);

// use all string functions to manipulate accordingly
jsonStr = jsonStr.replace("Pushkar", "Gates");
console.log(jsonStr);

let jsonObj = JSON.parse(jsonStr);
console.log(jsonObj);
