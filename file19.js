// Objects - inside an array (very useful in real-world application) :

const users = [
    {
        userId : 1,
        userFirstName : 'Amit',
        userLastName : 'Raj',
        gender : 'Male'
    },
    {
        userId : 2,
        userFirstName : 'Vishwajeet',
        userLastName : 'Kumar',
        gender : 'Male'
    },
    {
        userId : 3,
        userFirstName : 'Neeraj',
        userLastName : 'Kumar',
        gender : 'Male'
    },
    {
        userId : 4,
        userFirstName : 'Sakshi',
        userLastName : 'Singh',
        gender : 'Female'
    }
];

console.log(users);

for(let user of users) {
    console.log(user.userId, user.userFirstName, user.userLastName, user.gender, typeof(user), Array.isArray(user));
    for(let key of Object.keys(user)) {
        console.log(user[key]);
    };
};

for(let user of users) {
    for(let key in user) {
        console.log(user[key]);
    };
};
