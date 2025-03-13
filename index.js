// Function 1: Add two numbers
const add = (a, b) => a + b;

// Function 2: Subtract two numbers
const subtract = (a, b) => a - b;

// Function 3: Multiply two numbers
const multiply = (a, b) => a * b;

// Function 4: Divide two numbers
const divide = (a, b) => a / b;

// Function 5: Return a greeting message
const sayHello = name => `Hello, ${name}!`;

// Function 6: Square a number
const square = num => num ** 2;


const firstLetter = str => str.charAt(0);


const squareArray = arr => arr.map(num => num ** 2);

// Function 9: Check if a number is even
const isEven = num => num % 2 === 0;

// Function 10: Return the length of a string
const stringLength = str => str.length;


module.exports = {
  add,
  subtract,
  multiply,
  divide,
  sayHello,
  square,
  firstLetter,
  squareArray,
  isEven,
  stringLength
};
