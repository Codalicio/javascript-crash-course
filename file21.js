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

