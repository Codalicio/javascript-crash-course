// Array Destructuring :

const arr1 = ['value1', 'value2'];

let [...var1] = arr1;
console.log(var1);

let[var2, var3] = arr1;
console.log(var2);
console.log(var3);

var2 = 'value changed!';
console.log(var2);
console.log(var3);

const arr2 = ['item1', 'item2', 'item3', 'item4', 'item5'];

let [var4, var5, ...myNewArray] = arr2;
console.log(var4, var5, myNewArray, myNewArray.length, typeof(var4), typeof(var5), typeof(myNewArray), Array.isArray(myNewArray));
