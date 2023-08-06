let obj = {
    userName: "Pushkar",
    num: 14,
    lang: "Python",
}
console.log(obj);

// manual destructuring
// let userName = obj.userName;
// let num = obj.num;
// let lang = obj.lang;

// destructuring concept
let { userName, num, lang } = obj;

console.log(userName, num, lang);