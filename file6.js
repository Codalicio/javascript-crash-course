// Cloning Arrays :

arr1 = ['item1', 'item2'];
arr2 = arr1;
console.log(arr1, arr2);
console.log(arr1 === arr2);

arr3 = ['item1', 'item2'];
console.log(arr1 === arr3);
console.log(arr2 === arr3);

arr1.push("item3");
arr1.push("item4");
console.log(arr1, arr2, arr3);

// Cloning an array using slice method :

arr4 = ['item1', 'item2'];
arr5 = arr4.slice(0);
console.log(arr4, arr5, arr4 === arr5);

// Array concatenation :

arr6 = ['obj1', 'obj2'];
arr7 = [].concat(arr6);

console.log(arr6, arr7, arr6 === arr7);

arr6.push('obj67');
arr7.push('obj3');
console.log(arr6, arr7);
