// Function expression :

const findTarget = function(array, target) {
    for(let index in array) {
        if(array[index] === target) {
            return index;
        };
    };
    return -1;
};

arr1 = [45, 12, 48, 53, 28, 89];
// const output = findTarget(arr1, 28);
const output = findTarget(arr1, 8);
console.log(output);

// ---------------------------------------------------------

const evenNumbers = function(n) {
    if(n === 0) {
        return;
    };
    evenNumbers(n - 2);
    console.log(n);
};

evenNumbers(100);

// -----------------------------------------------------------

