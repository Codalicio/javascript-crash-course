// Arrays are good but not sufficient for real-world data.

// Objects :
// Objects store data in 'key:value' pairs.
// Objects don't have index and thus, can't be retrieved through index.

// Create objects :

const personDetails = {
    name : 'Amit',
    age : 27,
    address : "Hajipur, Bihar-844101",
    hobbies : ['guitar', 'sleeping', 'listening to music']
};
console.log(personDetails, typeof(personDetails));
console.log(personDetails.name);
console.log(personDetails.age);
console.log(personDetails.address);

let hobbies = personDetails.hobbies;
for(let hobby of hobbies) {
    console.log(hobby);
};

for(let index in hobbies) {
    console.log(hobbies[index].toUpperCase());
};

// Adding ElementInternals(key:value) pairs to objects :

personDetails.gender = "Male";
console.log(personDetails);
console.log(personDetails.gender.toUpperCase());

// Bracket Notation :
console.log(personDetails['name']);
console.log(personDetails['age']);
console.log(personDetails['address']);
console.log(personDetails['hobbies']);
console.log(personDetails['gender']);
