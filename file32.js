// function returning function :

const hello = () => {
    console.log("Hello World!");
}

const myFunc = () => {
    return hello;
};

myFunc()();
const ans = myFunc();
ans();

// ------------------------------------------

const sub = (num1, num2) => num1 - num2;

const myFunc1 = () => {
    return sub;
};

const ans1 = myFunc1();
console.log(ans1(9, 2));

// ---------------------------------------------------

