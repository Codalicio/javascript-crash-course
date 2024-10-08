// Lexical Scope :

const myVar = "valueUnique";

const myApp = () => {
    const myFunc1 = () => {
        const myFunc2 = () => {
            console.log("Inside myFunc2", myVar, typeof(myVar));
        };
        console.log("Inside myFunc1");
        myFunc2();
    };
    console.log("Inside myApp");
    myFunc1();
};

myApp();

// -------------------------------------------------------------------

const isEven = n => n % 2 === 0;

const myFunc3 = () => {
    console.log(isEven(909));
};

myFunc3();

// -------------------------------------------------------------------

