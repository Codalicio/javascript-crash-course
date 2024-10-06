// Arrow Functions :

const findTarget = (array, target) => {
    for(let index in array) {
        if(array[index] === target) {
            return index;
        };
    };
    return -1;
};

const arr1 = [4, 8, 56, 14, 35];
console.log(findTarget(arr1, 14));

// -------------------------------------------------

const evenNumbers = n => {
    if(n === 0) {
        return;
    };
    evenNumbers(n - 2);
    console.log(n);
};

evenNumbers(100);

// ------------------------------------------------------

const singHappyBirthday = n => {
    if(n === 0) {
        return;
    };
    singHappyBirthday(n - 1);
    console.log("happy Birthday to you.....!");
};

singHappyBirthday(5);

// --------------------------------------------------------------

const song = n => {
    for(let i = 0; i < 5; i++) {
        console.log("lalala...lalalala...");
    };
};

song(5);

// --------------------------------------------------------------

const firstCharacter = myStr => {
    console.log(myStr[myStr.length - 1]);
};

const myStr = "Raj";
firstCharacter(myStr);

// ------------------------------------------------------------------

const obj = obj => {
    for(let key in obj) {
        console.log(obj[key]);
    };
};

const object1 = {name:'Amit', age:27,};
obj(object1);

// --------------------------------------------------------------------

const obj1 = obj => {
    for(let key of Object.keys(obj)) {
        console.log(obj[key]);
    };
};

const object2 = {firstName:'Amit', lastName:'Raj', gender:'Male',};
obj1(object2);

// ------------------------------------------------------------------------------

const isEven = (n) => n % 2 === 0;

console.log(isEven(54));

// --------------------------------------------------------------------

