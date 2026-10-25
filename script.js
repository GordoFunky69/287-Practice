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
