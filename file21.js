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

