// undefined :

let firstName;
console.log(typeof(firstName));

firstName = "Harshit";
console.log(typeof(firstName), firstName);

// null :

let myName = null;
console.log(myName, typeof(myName));

myName = "Mohit";
console.log(myName, typeof(myName));

// Big Int :

console.log(Number.MAX_SAFE_INTEGER);

let num1 = BigInt(1234);
let num2 = 12n;

console.log(num1, typeof(num1));
console.log(num2, typeof(num2));

let num3 = num1 + num2;
console.log(num3, typeof(num3));

// Booleans and comparison operator :

let number1 = 8;
let number2 = 7;

console.log(number1 > number2);

// == vs === :
// == checks only the value, whereas === checks both the value and the Data Type :

let number3 = 10;
let string1 = '10';

console.log(number3 == string1);
console.log(number3 === string1);

// != vs !== :

let number4 = 11;
let string2 = '11';

console.log(number4 != string2);
console.log(number4 !== string2);

// Conditionals :
// if else statement :

let age = 17;
if(age >= 18) {
    console.log("You can drive!");
} else {
    console.log("You cannot drive!");
};

let myNum = 36;

if(myNum % 2 === 0) {
    console.log(`The number ${myNum} is even.`);
} else {
    console.log(`The number ${myNum} is odd.`);
};

// Truthy and Falsy values :

// Falsy values :
// false
// null
// undefined
// ""
// 0

// false :
let name1 = false;
if(name1) {
    console.log(True);
} else {
    console.log(false);
};

// null :
let name2 = null;
if(name2) {
    console.log("Hi");
} else {
    console.log("Hello");
};

// undefined :
let name3;
if(name3) {
    console.log("Truthy")
} else {
    console.log("falsy");
};

// "" :
let name4 = "";
if(name4) {
    console.log(1);
} else{
    console.log(-1);
};

// 0 :
let name5 = 0;
if(name5) {
    console.log("That's true!");
} else {
    console.log("That's false!");
};

// Ternary OPerator or Conditional operator :
let myAge = 5;
let drink = myAge >= 5 ? "Coffee" : "Milk";
console.log(drink);
