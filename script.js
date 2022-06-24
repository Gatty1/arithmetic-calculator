// program to create a simple calculator using the if ...else...if in Javascript.
// take the operator from the user through prompt box in Javascript.
const operator =prompt('Enter operator to perform the calculation(either +,-,* or /):');

// accept the number from the user through prompt box
const number1 =parseFloat(prompt('Enter the first number:'));
const number2 =parseFloat(prompt('Enter the second number:'));
let result;
//declaration of the variable.
// use if,elseif and else keyword to define the calculator condition in javascript.
// use +(addition) operator to add two numbers
if (operator =='+') {result = number1 +number2;}
// use -(subtraction) operator to subtract two numbers
else if (operator == '-'){result = number1 -number2;}
//use *(multiplication) operator to multiply two numbers
else if (operator == '*') {result =number1 *number2;}
else {result = number1 /number2;}
//use /(division) operator to divide two numbers

// display the result of the calculator
window.alert('Result is:' + result);