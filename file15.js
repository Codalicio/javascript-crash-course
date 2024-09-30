// Iterating Objects :

const personDetails = {
    name : 'Amit',
    age : 27,
    address : "Hajipur, Bihar-844101",
    "person's hobbies" : ['guitar', 'sleeping', 'listening to music']
};

// Run 'for in' loop on objects :

for(let key in personDetails) {
    console.log(personDetails[key]);
    console.log(`${key} : ${personDetails[key]}`);
};
