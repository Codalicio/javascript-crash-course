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

// hello(5);