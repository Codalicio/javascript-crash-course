// Parameter Destructuring :

const person1 = {
    firstName : "Amit",
    lastName : "Raj",
    age : 27,
};

const person2 = {
    firstName : 'Sonu',
    lastName : 'Kumar',
    age : 30,
};

const personDetails = ({firstName:var1, lastName:var2, age:var3}) => {
    console.log(var1, var2, var3);
};

personDetails(person1);
personDetails(person2);

// -------------------------------------------------------------------------

const array = [1, 5, 'item1'];

const arrayDetails = ([a, ...c]) => {
    console.log(a, c)
};

arrayDetails(array);

// ----------------------------------------------------------------------

