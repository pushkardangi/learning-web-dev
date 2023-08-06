// Spread operator

let arr = [1,4,5,3,4];

function avg(a,b,c){
    return (a+b+c)/3;
}

// give inputs into function
let average = avg(...arr);
console.log(average);

//-----------------------------------------

// concatenate arrays
let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,0];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

//-----------------------------------------

// Copy objects, with minor changes
let obj1 = {
    name1:"Pushkar",
    class1: 13,
    fav_lang:"Python"
}
console.log(obj1);

// normal way to copy object
// let obj2 = {};
// obj2.name1 = obj1.name;
// obj2.class1 = obj1.class;
// obj2.fav_lang = "Javascript";

// using spread operator
let obj2 = {...obj1, fav_lang:"JavaScript"};
console.log(obj2);