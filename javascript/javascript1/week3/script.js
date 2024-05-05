// Item array removal

const names = [
    "Peter",
    "Ahmad",
    "Yana",
    "Kristina",
    "Rasmus",
    "Samuel",
    "Katrine",
    "Tala",
];
const nameToRemove = "Ahmad";

// Find the index of the name that should be removed
const indexToRemove = names.indexOf(nameToRemove);
// Remove one item at indexToRemove from the names array
names.splice(indexToRemove, 1);

console.log(names); // ['Peter', 'Yana', 'Kristina', 'Rasmus', 'Samuel', 'Katrine', 'Tala']

console.log(
    "-----------------------------------------------------------------"
);
