
// create an object

let course = {
    title: "JavaScript Course",
    course_number: 101,
    price: 999,
    message() {
        console.log("Welcome...");
    },
    time: 10.1
};

console.log(course);

// Factory function

function create_course(title) {
    return {
        title: title,
        enroll() {
            console.log("Enrolled Successfully...");
        }
    }
}

let course1 = create_course("Java");
console.log(course1);

// Using function
function Employee(fname, age) {
        this.fname = fname,
        this.age = age,
        this.enroll = function () {
            console.log("You are a good employee");
            return;
        }
};

let emp = new Employee("Pushkar", 22);
console.log(emp);

// delete
delete emp.age;
console.log(emp);

