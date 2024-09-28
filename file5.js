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
