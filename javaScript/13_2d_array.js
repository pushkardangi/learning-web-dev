

// 2D Array with pre-defined values

let arr = [
    ["Name", "Age", "Gender", "Course"],
    ["Pushkar", 21, "M", "BCA"],
    ["Anjali", 20, "F", "BCA"],
    ["Nwang", 21, "M", "B.tech"],
    ["Ajaz", 22, "M", "M.tech"]
];

console.log(arr, "\n");

let rows = 4;
let cols = 4;

// create a 2D array
let ar = new Array(rows);

for (let i = 0; i < rows; i++) {
    ar[i] = new Array(cols);
}

// empty 2D array
console.log(ar, "\n");

// setting random values in the array
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        ar[i][j] = Math.round(Math.random() * 10);
    }
}

function print(text) {
    process.stdout.write(text + " ");
}

// print the array
for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
        print(ar[i][j]);
    }
    console.log();
}

