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

// When will we be there??

const travelInformation = {
    speed: 50, // km/h
    destinationDistance: 432, //km
};

function calculateTravelTime(travelInformation) {
    // To get speed and destinationDistance from travelInformation
    const { speed, destinationDistance } = travelInformation;

    // Calculate total time in hours
    const totalTimeHours = destinationDistance / speed;

    // Calculate hours and minutes separately
    const hours = Math.floor(totalTimeHours);
    const minutes = Math.round((totalTimeHours - hours) * 60);

    const hoursAndMinutes = `${hours} hours and ${minutes} minutes`;

    return hoursAndMinutes;
}

const travelTime = calculateTravelTime(travelInformation);
console.log(travelTime); // 8 hours and 38 minutes

console.log(
    "-----------------------------------------------------------------"
);
