// nested destructuring :

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

const [user1, user2, user3, user4] = users;
console.log(user1);
console.log(user2);
console.log(user3);
console.log(user4);


const [{userFirstName:user1_firstName, userId:user1_id}, , , {gender:user4_orientation}] = users;
console.log(user1_firstName);
console.log(user1_id);
console.log(user4_orientation);

const userDetails = [
    {
        userId : 1,
        userName : 'Raj',
        userAge : 27
    },
    {
        userId : 2,
        userName : 'Kumar',
        userAge : 25
    },
    {
        userId : 3,
        userName : 'Singh',
        userAge : 68
    },
    {
        userId : 4,
        userName : 'Sharma',
        userAge : 45
    }
];

const [{userName:user1UserName, userAge:user1UserAge}, , {userAge:user3UserAge}, {userName:user4UserName}] = userDetails;
console.log(user1UserName);
console.log(user1UserAge);
console.log(user3UserAge);
console.log(user4UserName);
