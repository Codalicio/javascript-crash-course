// Running 'for of' loop on arrays :

const fruits = ['apple', 'mango', 'grapes', 'pineapple'];
for(let fruit of fruits) {
    console.log(fruit.toUpperCase());
};

for(let fruit of fruits) {
    console.log(fruit.toLowerCase());
};

fruits1 = [];
for(let fruit of fruits) {
    fruits1.push(fruit.toUpperCase());
};
console.log(fruits1, fruits1.length, typeof(fruits1), Array.isArray(fruits1));
