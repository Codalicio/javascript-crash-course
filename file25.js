// Functions inside Functions :

const baseFunc = () => {
    const hello = () => {
        return "Hello World!";
    };
    const sum = (num1, num2) => num1 + num2;
    const mul = (num1, num2) => num1 * num2;
    console.log("inside baseFunc");
    console.log(hello());
    console.log(sum(89, 11));
    console.log(mul(9, 8));
};

baseFunc();

// -----------------------------------------------------------------

