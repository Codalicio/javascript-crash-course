// Callback Function :

const printLength = (str) => {
    console.log(str.length, str.toUpperCase());
};

const myName = "Amit";
const sum = (callback, a, b) => {
    console.log(a + b);
    callback(myName);
};

sum(printLength, 10, 67);

// ---------------------------------------------------------------

