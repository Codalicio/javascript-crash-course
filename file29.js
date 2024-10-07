// Rest parameters :

const sumAll = (...numbers) => {
    let total = 0;
    console.log(numbers, Array.isArray(numbers));
    for(let number of numbers) {
        total += number;
    };
    console.log(total);
};

sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

// -----------------------------------------------------------------

const printAll = (a, b, ...c) => {
    console.log(a, b, c);
    let total = 0;
    for(let item of c) {
        total = total + item;
    };
    console.log(total);
};
printAll(1, 2, 3, 4, 5, 6);

// --------------------------------------------------------------------

