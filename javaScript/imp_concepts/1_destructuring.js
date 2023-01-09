let obj = {
    name1:"Pushkar",
    class1: 14,
    fav_lang:"Python"
}
console.log(obj);

// manual destructuring
// let name1 = obj.name1;
// let class1 = obj.class1;
// let fav_lang = obj.fav_lang;

// destructuring concept
let {name1, class1, fav_lang} = obj;

console.log(name1, class1, fav_lang);