// Using for loop in an array :

let arr1 = ['item1', 'item2'];
console.log(arr1.length);
console.log(arr1[arr1.length - 2]);

for(let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
};

for(let i = 0; i< arr1.length; i++) {
    console.log(arr1[i].toUpperCase());
};

for(let i = 0; i< arr1.length; i++) {
    console.log(arr1[i].toLowerCase());
};

let items = [];
for(let i = 0; i < arr1.length; i++) {
    items.push(arr1[i]);
};
console.log(items, arr1 === items);

