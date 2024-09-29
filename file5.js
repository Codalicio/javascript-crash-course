// Reference Data Type :
// Array - A collection of data/elements.
// Array are index-based and mutable.

let fruits = ['apple', 'mango', 'banana', 'grapes', 'guava', 'strawberry'];
console.log(fruits[3]);
console.log(fruits.length);
fruits.push('kela');
console.log(fruits);
let poppedFruit = fruits.pop();
console.log(poppedFruit);
console.log(fruits);
fruits[1] = "litchi";
console.log(fruits);
console.log(typeof(fruits));
console.log(Array.isArray(fruits));

let numbers = [1, 5, 9, 7, 2];
console.log(numbers);
console.log(numbers.length);
console.log(numbers[3]);
console.log(typeof(numbers));
console.log(Array.isArray(numbers));

let mixed = [1, 2, 3.4, "abc", null, undefined, true, ['one', 'two', 7]];
console.log(mixed);
console.log(mixed.length);
console.log(mixed[7]);
console.log(mixed[7][2]);
console.log(mixed[7].length);
console.log(typeof(mixed));
console.log(Array.isArray(mixed));

// Adding elements to an array :

// push() method :
let fruits1 = ['apple', 'mango', 'grapes'];
console.log(fruits1);

fruits1.push("banana");
console.log(fruits1);

// pop() method :

let poppedFruit1 = fruits1.pop();
console.log(fruits1);
console.log(`The popped fruit is ${poppedFruit1}.`);

// unshift() method :
fruits1.unshift("Strawberry");
console.log(fruits1);

// shift() method :
let shiftedFruit = fruits1.shift();
console.log(fruits1);
console.log(`The shifted fruit is ${shiftedFruit}.`);

// Note : push and pop methods are faster as compared to shift and unshift.
