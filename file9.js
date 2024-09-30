// Running 'while loop' on arrays :

const fruits = ['apple', 'mango', 'grapes'];

let i = 0;
while(i < fruits.length) {
    console.log(fruits[i]);
    i++;
};

let j = 0;
while(j < fruits.length) {
    console.log((fruits[j]).toUpperCase());
    j++;
};

let k = 0;
while(k < fruits.length) {
    console.log(fruits[k].toLowerCase());
    k++;
};

let fruits1 = [];
let a = 0;
while(a < fruits.length) {
    fruits1.push(fruits[a].toUpperCase());
    a++;
};
console.log(fruits1, fruits1.length, typeof(fruits1), Array.isArray(fruits1));
