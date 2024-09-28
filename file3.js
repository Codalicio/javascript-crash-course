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
