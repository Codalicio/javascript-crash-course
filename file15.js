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

// Object.keys :
// Object.keys(object) - will give an araray of keys, on which we can apply 'for of' loop.

const keysArray = Object.keys(personDetails);
console.log(keysArray);
console.log(Array.isArray(keysArray));

for(let key of keysArray) {
    console.log(personDetails[key]);
};

for(let key of Object.keys(personDetails)) {
    console.log(`${key} : ${personDetails[key]}`);
};

