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
