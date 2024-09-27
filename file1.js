"use strict";

console.log("Hello World!");

// Backticks around a string :
console.log(`My name is Amit Raj.`);

// Intro to Variables :

// Variables are used to store information/data that can be used and modified later anytime.
// Variable names are case sensitive.

// Declaring a Variable :
var firstName = "Amit";

// Using a variable :
console.log(firstName);

// Changing value of the variable :
firstName = "Sonu";
console.log(firstName);

// Rules for naming a variable :

// Variable name should not start with an integer/number, 
// but can start with underscore (_) or dollar sign ($).
// Also we can't use spaces in-between the variable name.

// Convention :
// Start a variable name with small letter and use camelCase :
let lastName = "Raj";
let last_name = "Kumar";

console.log(lastName); // camelCase writing
console.log(last_name); // snake_case writing

// let keyword :
let fullName = "Amit Raj";
console.log(fullName);

fullName = "Sonu Kumar";
console.log(fullName);

// Declaring constants :
// Constant variables cannot be re-assigned any value after declaration.

const pi = 3.14;
// pi = 3.15;
console.log(pi);
