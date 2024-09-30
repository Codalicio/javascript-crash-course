// Run 'for in' loop on arrays :

const fruits = ['apple', 'mango', 'grapes', 'pineapple'];

for(let index in fruits) {
    console.log(fruits[index].toUpperCase());
};

for(let index in fruits) {
    console.log(fruits[index].toLowerCase());
};

fruits1 = [];
for(let index in fruits) {
    fruits1.push(fruits[index].toUpperCase());
};
console.log(fruits1, fruits1.length, typeof(fruits1), Array.isArray(fruits1));
