// functions in JavaScript :

// Sing Happy Birthday 500 times :
function sing() {
    console.log("Happy Birthday!....");
};

function repeat(a) {
    for(let i = 0; i < 500; i++) {
        a();
    };
};

repeat(sing);

// ------------------------------------------------

for(let i = 0; i <= 1; i++) {
    function hello(n) {
        if(n === 0) {
            return
        };
        console.log(n)
        hello(n - 1);
        console.log(n)
    };
    hello(5);
};

// ---------------------------------------------------

function myFunc(n) {
    if(n === 0) {
        return;
    };
    myFunc(n - 2)
    console.log(n);
}

myFunc(100);

// -------------------------------------------------------

function hi(n) {
    if(n === 0) {
        return;
    };
    hi(n - 1);
    console.log("Happy Birthday...", n);
};
hi(50);

// ----------------------------------------------------------

const sum = (a) => {
    return a;
};

if (sum(9) == 7) {
    console.log("You are right!");
}  else {
    console.log("You are wrong!");
};

// -----------------------------------------------------------------

console.log(undefined + undefined); // => NaN(Not a Number)

const isEvenOrOdd = (n) => n % 2 === 0;
console.log(isEvenOrOdd(9000));

function isEvenOrOdd1(n) {
    return n % 2 === 0;
};
console.log(isEvenOrOdd1(99));

const isEvenOrOdd2 = function(n) {
    return n % 2 === 0;
};
console.log(isEvenOrOdd2(550));

// ------------------------------------------------------------------

function firstChar(string) {
    return string[0];
};
console.log(firstChar("Amit"));

const firstChar1 = function(string) {
    return string[0];
};
console.log(firstChar1("Raj"));

const firstChar2 = string => string[0];
console.log(firstChar2("vikash"));

// -----------------------------------------------------------

const findTarget = (array, target) => {
    for(let index in array) {
        if(array[index] === target) {
            return index;
        };
    };
    return -1;
};

array1 = [1, 4, 5, 9, 88];
target = 88;
console.log(findTarget(array1, target));

function targetIndex(array, target) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === target) {
            return i;
        };
    };
    return -1;
};

const result = targetIndex(array1, target);
console.log(result);

function indexOfTarget(array, target) {
    for(let element of array) {
        if(element === target) {
            return 1;
        };
    };
    return -1;
};

array2 = [7, 5, 100, 75, 83];
const output = indexOfTarget(array2, 1000);
console.log(output);

// -------------------------------------------------------
