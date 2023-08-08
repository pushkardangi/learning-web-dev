
// Arrow function

let gm = () => {
    console.log("Good Morning");
};

let sum = (a, b) => {
    console.log("sum : ", a + b);
}

let half = a => console.log("half : ", a / 2);

let obj = {
    greeting: "Good Morning",
    names: [" Pushkar", " Harry", " skillF", " Jaguar"],
    speak() {
        this.names.forEach((student) => {
            // lexical this
            console.log(this.greeting + student);
        });
    }
}

// function calls
gm();
sum(33, 44);
half(50);
obj.speak();

console.log();

// Normal Function with default parameters:

function greet(name = "default name", surname = "default surname") {
    console.log("Good Morning", name, surname);
};

// function calls
greet("Pushkar", "Dangi");
greet("Honey");
greet();
