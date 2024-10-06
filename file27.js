// Block scope vs Function scope :

// let and const are block scope, while var is function scope :

const firstName = "Raj";

{
    const firstName = "Amit";
    console.log(firstName);
}

console.log(firstName);

{
    const firstName = "Aakash";
    console.log(firstName);
}

console.log(firstName);

if(true) {
    const firstName = "Sonal";
    console.log("Hello World!");
    console.log(firstName);
};

console.log(firstName);

const myApp = () => {
    if(true) {
        const firstName = "Parul";
        console.log(firstName);
    };
    console.log(firstName);
};

myApp();

// -------------------------------------------------------------