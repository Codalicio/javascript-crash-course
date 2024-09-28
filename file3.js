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
