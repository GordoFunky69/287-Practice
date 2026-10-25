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

