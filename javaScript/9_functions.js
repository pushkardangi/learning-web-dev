
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
    names: [" Pushkar", " Harry", " skillF", " Bete", " Jaguar"],
    speak() {
        this.names.forEach((student) => {
            // lexical this
            console.log(this.greeting + student);
        });
    }
}
obj.speak();

// function call : 
// sum(33, 44);
// half(553);



// Normal Function :

let name = "Pushkar";
let surname = "Dangi";

function greet(name = "default name", surname = "default text") {
    console.log("Good Morning", name, surname);
    console.log("<br>");

};

// function calls
greet(name, surname);
greet("Honey");
greet();
