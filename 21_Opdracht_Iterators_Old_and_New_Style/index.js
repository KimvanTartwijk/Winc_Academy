
const colors = ['yellow', 'blue', 'red', 'orange'];

// Old Style - Loops
let i = 0;
while (i < colors.length) {
    console.log(colors[i]);
    i++;
}

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

// New Style - Array Methods
colors.forEach(element => console.log(element));

// Looping through properties of an object
const person = {
    name: 'Kim',
    age: 30,
    dateOfBirth: 1991 - 08 - 06,
    placeOfBirth: 's-Hertogenbosch',
    favouriteColor: 'Green',
};

let objectEntries =
    console.log(Object.entries(person));
