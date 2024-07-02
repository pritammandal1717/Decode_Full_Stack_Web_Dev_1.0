// Q1. Write a program that grades students based on their marks
//      If greater than 90 then A Grade
//      If between 70 and 90 then a B grade
//      If between 50 and 70 then a C grade
//      Below 50 then an F grade

const marks = 99;
let grade;

if (marks >= 90){
    grade = 'A'
}
else if(marks >= 70) {
    grade = 'B';
} 
else if(marks >= 50) {
    grade = 'C';
}
else{
    grade = 'F'
}

console.log(`The student's grade is: ${grade}`);