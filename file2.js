// String Indexing :

let firstName = "Amit";
console.log(firstName[3]);

// Finding the length of a 'string' :
console.log(firstName.length);

// Accessing the last element of a string :
console.log(firstName[firstName.length-1]);

// Accessing the second-last element of a string :
console.log(firstName[firstName.length-2]);

// Some in-built methods for string :
// Strings are immutable, so every method will give a brand new String.

// trim() method :
let lastName = "    Raj    ";
console.log(lastName.length);
console.log(lastName);

let trimmedString = lastName.trim();
console.log(trimmedString.length);
console.log(trimmedString);

// toUpperCase() method :
let upperCaseString = trimmedString.toUpperCase();
console.log(upperCaseString);

// toLowerCase() method :
let lowerCaseString = upperCaseString.toLowerCase();
console.log(lowerCaseString);

// String slicing :

let myName = "Harshit";
let newName = myName.slice(0, 5);
console.log(newName);

newName = myName.slice(1);
console.log(newName);

// typeof operator :

let age = 99;
console.log(typeof(age));

console.log(typeof(newName));

// Convert a number to a string :
let myAge = 99;
myAge = myAge + "";
console.log(typeof(myAge));

// Convert a number to a string using a constructor :
let myNum = 898;
console.log(typeof(myNum));

myNum = String(myNum);
console.log(typeof(myNum));

// Convert a string to a number :
let myStr = "78";
console.log(typeof(myStr));

myStr = +myStr;
console.log(typeof(myStr));

// Convert a string to a number using the constructor method :
let myStr1 = "56";
console.log(typeof(myStr1));

myStr1 = Number(myStr1);
console.log(typeof(myStr1));

// String concatenation :

let str1 = "My name is ";
let str2 = "Amit.";
console.log(str1 + str2);

let fName = "Amit";
let lName = "Raj";
let fullName = (fName + " " + lName);
console.log(fullName);

let item1 = "45";
let item2 = "78";
let finalItem = item1 + item2;
console.log(finalItem);
console.log(typeof(finalItem));

// Also,

finalItem = +item1 + +item2;
console.log(finalItem);
console.log(typeof(finalItem));

// Template String :

let age1 = 99;
let personName = "Raj";

// Without Using Template string :
let aboutMe = "My name is " + personName + " and my age is " + age1;
console.log(aboutMe);

// Using Template string :
aboutMe = (`My name is ${personName} and my age is ${age1}.`);
console.log(aboutMe);