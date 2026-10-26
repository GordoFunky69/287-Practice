const heading = document.getElementById("greeting");

heading.textContent = "Welcome to My JavaScript Website!";
// Practicing JavaScript variables

const university = "Concordia";
let coursesCompleted = 3;
let currentGrade;

console.log(university);
console.log(coursesCompleted);
console.log(currentGrade);

coursesCompleted = 4;
console.log(coursesCompleted);
// Slide 15 - Template Literals

const studentName = "Alex";
const course = "SOEN 287";

console.log(`Hello ${studentName}, welcome to ${course}!`);


// Slide 16 - Operators

let points = 10;

points += 5;
points *= 2;

console.log(`Your final score is ${points}`);

console.log(5 + "3");
console.log(5 - "3");

console.log(1 + 2 + "birds");
console.log("bird" + 1 + 2);
console.log(1 + (2 + "birds"));

console.log('$' + 3 + 4);

// Slides 23-25 - Explicit Conversion

const numberText = "25";

console.log(numberText + 5); //255  
console.log(Number(numberText) + 5); //30

console.log(Number("6 apples")); //NaN
console.log(parseInt("6 apples")); //6
console.log(parseFloat("7.25")); //7.25
// JavaScript (2) - Slide 3

const firstWord = "SOEN";
const secondWord = "SOEN";

console.log(firstWord === secondWord); //True
console.log(firstWord.length); //3
console.log(typeof firstWord);//String


// JavaScript (2) - Slide 5: String Methods

const courseTitle = "SOEN 287 Web";

console.log(courseTitle.charAt(0));
console.log(courseTitle.indexOf("287"));
console.log(courseTitle.slice(5, 8));
console.log(courseTitle.substring(5, 8));
console.log(courseTitle.toUpperCase());
console.log(courseTitle.split(" "));
console.log(courseTitle.replace("Web", "JS"));

console.log(courseTitle);



// JavaScript (2) - Slides 6-7

console.log(Boolean(0));
console.log(Boolean("0"));
console.log(Boolean(""));
console.log(Boolean("false"));
console.log(Boolean(null));
console.log(Boolean([]));

if ("false") {
    console.log("This condition is truthy!");
}

// JavaScript (2) - Slides 8-10

// Slide 8: Date Object
const today = new Date();

console.log(today.getFullYear());
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getDay());

// Slide 9: Console Output
console.log("JavaScript is running!");

// Slide 10: Dialog Boxes
// Uncomment ONE line at a time to test.

// alert("Welcome to my website!");

// const userName = prompt("What is your name?");
// console.log(userName);

// const answer = confirm("Do you like JavaScript?");
// console.log(answer);




// JavaScript (2) - Slides 11-13

// Slide 11 - Conditions
if (1) {
    console.log("Truthy!");
} else {
    console.log("Falsy!");
}

// Slide 12 - Ternary Operator
const studentAge = 20;
const studentStatus = studentAge >= 18 ? "adult" : "minor";

console.log(studentStatus);

// Slide 13 - Equality
console.log("3" == 3);
console.log("3" === 3);
console.log(0 == "");
console.log(null == undefined);
console.log(null === undefined);

// JavaScript (2) - Slides 14-17

// Slide 14: Primitive strings
const stringA = "123";
const stringB = "123";

console.log(stringA == stringB);
console.log(stringA === stringB);

// Slide 15: Strict inequality
console.log(3 !== "3");

// Slide 16: Two different objects
const objectA = new String("123");
const objectB = new String("123");

console.log(objectA == objectB);
console.log(objectA === objectB);

// Slide 17: Primitive vs object
console.log(stringA == objectA);
console.log(stringA === objectA);


// JavaScript (2) - Slides 18-20

// Slide 18: Logical AND and OR
console.log(4 && 5);
console.log(false && 7);
console.log(0 || "none");

// Slide 19: NOT and Double NOT
console.log(!"Hello");
console.log(!!"Hello");
console.log(!!0);

// Slide 20: Bitwise operators
console.log(5 & 1);
console.log(5 | 1);
console.log(5 ^ 1);
console.log(5 << 1);
console.log(5 >> 1);
console.log(~5);



// JavaScript (2) - Slides 21-23

// Slide 21 - Switch
const selectedFruit = "apple";

switch (selectedFruit) {
    case "banana":
        console.log("Banana selected");
        break;

    case "apple":
        console.log("Apple selected");
        break;

    default:
        console.log("Unknown fruit");
}

// Slide 22 - Fall-through
const selectedColor = "blue";

switch (selectedColor) {
    case "blue":
        console.log("Blue");
    case "red":
        console.log("Red");
    default:
        console.log("Other");
}

// Slide 23 - Loops
const languages = ["HTML", "CSS", "JavaScript"];

for (const language of languages) {
    console.log(language);
}



// JavaScript (2) - Slides 24-26

// Slide 24 - for loop
for (let i = 1; i <= 5; i++) {
    console.log("For:", i);
}

// Slide 25 - while loop
let whileCount = 1;

while (whileCount <= 5) {
    console.log("While:", whileCount);
    whileCount++;
}

// Slide 26 - do...while loop
let doCount = 10;

do {
    console.log("Do:", doCount);
    doCount++;
} while (doCount < 5);


// JavaScript (2) - Slides 27-28

// Slide 27 - for...in
const studentInfo = {
    name: "Alex",
    program: "Software Engineering",
    university: "Concordia"
};

for (const key in studentInfo) {
    console.log(key, ":", studentInfo[key]);
}

// Slide 28 - for...of
const programmingLanguages = ["Java", "JavaScript", "C++"];

for (const language of programmingLanguages) {
    console.log(language);
}


console.log(numbers);

// Slide 6 - Block scope
{
    let insideBlock = "Hello!";
    console.log(insideBlock);
}

// Slide 7 - var and function scope
function scopePractice() {
    var message = "Function";

    if (true) {
        var message = "Block?";
    }

    console.log(message);
}

scopePractice();




// JavaScript (3) - Slides 8-10

function practiceScope3() {

    // Slide 8 - var
    var city1 = "global";

    {
        var city1 = "in scope";
        console.log("var inside:", city1);
    }

    console.log("var outside:", city1);

    // Slide 9 - let
    let city2 = "global";

    {
        let city2 = "in scope";
        console.log("let inside:", city2);
    }

    console.log("let outside:", city2);

    // Slide 10 - Hoisting
    console.log("Hoisting:", score);
    var score = 100;
    console.log("After declaration:", score);
}

practiceScope3();


// JavaScript (3) - Slides 11-13

// Slide 11: Local variable hoisting
function testHoisting() {
    console.log("Before:", course);
    var course = "SOEN 387";
    console.log("After:", course);
}

testHoisting();

// Slide 12: Undeclared variable
function testUndeclared() {
    // Uncomment to test:
    // console.log(missingCourse);
    // missingCourse = "SOEN 287";
}

// Slide 13: Scope chain
function testScopeChain() {
    var course = "SOEN 287";

    function show() {
        console.log("Inside:", course);
    }

    show();
}

testScopeChain();


// JavaScript (3) - Slides 14-17

function practiceFinalScope() {
    "use strict";

    const university = "Concordia";
    let points = 10;

    points += 5;

    console.log(university);
    console.log(points);

    function showMessage() {
        console.log("Studying at " + university);
    }

    showMessage();
}

practiceFinalScope();


// JavaScript (4) - Slides 5-7

// Slide 5 - Default and rest parameters
function welcome(name, course = "SOEN 287") {
    return `${name} studies ${course}`;
}

console.log(welcome("Alex"));

function countStudents(...students) {
    return students.length;
}

console.log(countStudents("Alex", "Mei", "Ali"));

// Slide 6 - Function as a parameter
function sayHi(name) {
    return `Hi, ${name}!`;
}

function runGreeting(fn, name) {
    console.log(fn(name));
}

runGreeting(sayHi, "Alex");

// Slide 7 - Closure
function makeMultiplier(n) {
    return function(x) {
        return x * n;
    };
}

const timesFour = makeMultiplier(4);
console.log(timesFour(5));


// JavaScript (4) - Slides 8-10

// Slide 8 - Anonymous function
const multiply = function(a, b) {
    return a * b;
};

console.log("Multiply:", multiply(3, 4));

// Slide 9 - Arrow function with no parameters
const sayWelcome = () => {
    return "Welcome to SOEN 287!";
};

console.log(sayWelcome());

// Slide 10 - Arrow function with one parameter
const triple = number => {
    return number * 3;
};

console.log("Triple:", triple(5));

