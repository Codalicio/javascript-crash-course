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