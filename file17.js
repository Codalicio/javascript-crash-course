// spread operator in objects :

const obj1 = {
    key1 : 'value1',
    key2 : 'value2'
};

const obj2 = {
    key1 : 'valueUnique',
    key3 : 'value3',
    key4 : 'value4'
};

const newObj = {...obj1, ...obj2};
console.log(newObj);

for(let key in newObj) {
    console.log(newObj[key]);
};

for(let key of Object.keys(newObj)) {
    console.log(`${key} : ${newObj[key]}`);
};

const newObj1 = {...obj1, ...obj2};
const newObj2 = {...obj2, ...obj1, key69 : 'value69'};
console.log(newObj1);
console.log(newObj2);

const newObj3 = {...'abcdef'};
const newObj4 = {...['item1', 'item2', 'item3']};
console.log(newObj3);
console.log(newObj4);
