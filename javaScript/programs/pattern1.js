// Pattern
// 1
// 2 2
// 3 3 3
// 4 4 4 4
// 5 5 5 5 5

let num = 5;
let text = "";

for (let i = 1; i <= num; i++) {
  for (let j = 1; j <= i; j++) {
    text += i;
  }
  text += "\n";
}

console.log(text);
