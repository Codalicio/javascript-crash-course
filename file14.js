// Difference between dot notation and bracket notation :

const personDetails = {
    name : 'Amit',
    age : 27,
    address : "Hajipur, Bihar-844101",
    "person's hobbies" : ['guitar', 'sleeping', 'listening to music']
};

console.log(personDetails["person's hobbies"]);
const key = "E-mail";
personDetails[key] = "rajamitnine@gmail.com";
console.log(personDetails);
