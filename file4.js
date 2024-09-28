// if, else if, else :

let temperature = -1;

if(temperature > 40) {
    console.log("Its too hot!");
} else if(temperature > 30) {
    console.log("Apply sunscreen");
} else if(temperature > 20) {
    console.log("let's go for a swim");
} else if(temperature > 10) {
    console.log("It cold outside");
} else {
    console.log("It's freezing outside!");
};

if(temperature < 0) {
    console.log("It's freezing outside!");
} else if(temperature < 17) {
    console.log("It's cold outside");
} else if(temperature < 35) {
    console.log("Let's go for a swim");
} else if(temperature < 50) {
    console.log("It's hot");
} else {
    console.log("It's too hot outside!");
};

// switch statement :
let day = 3;

switch(day) {
    case 0 :
        console.log("Sunday");
        break;
    case 1 :
        console.log("Monday");
        break;
    case 2 :
        console.log("Tuesday");
        break;
    case 3 :
        console.log("Wednesday");
        break;
    case 4 :
        console.log("Thursday");
        break;
    case 5 :
        console.log("Friday");
        break;
    case 6 :
        console.log("Saturday");
        break;
    default :
        console.log("Invalid day!");
};

// while loop :

let num = 0;
while(num < 10) {
    console.log(num);
    num++;
};
console.log(`Current value of num is ${num}.`);

let sum = 0;
let i = 1;
while(i <= 10) {
    sum = sum + i;
    i++;
};
console.log(`The sum of first 10 natural numbers is ${sum}.`);

// Mathematical formula :
let j = 100;
let sumTotal = ((j*(j+1)) / 2)
console.log(sumTotal);
