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
    // To get speed and destinationDistance separately from the travelInformation
    const { speed, destinationDistance } = travelInformation;

    // Calculate total time in hours
    const totalTimeHours = destinationDistance / speed;

    // Calculate hours and minutes separately
    const hours = Math.floor(totalTimeHours);
    const minutes = Math.floor((totalTimeHours - hours) * 60);

    const hoursAndMinutes = `${hours} hours and ${minutes} minutes`;

    return hoursAndMinutes;
}

console.log(calculateTravelTime(travelInformation)); // 8 hours and 38 minutes

console.log(
    "-----------------------------------------------------------------"
);

// Series duration of my life

const seriesDurations = [
    {
        title: "Breaking Bad",
        days: 2,
        hours: 3,
        minutes: 40,
    },
    {
        title: "This Is Us",
        days: 3,
        hours: 3,
        minutes: 15,
    },
    {
        title: "Black Mirror",
        days: 0,
        hours: 22,
        minutes: 32,
    },
];

const averageLifespan = 80 * 365.25 * 24 * 60; // years * days * hours * minutes

// A variable to keep the total percentage of life by all series
let totalPercentageOfLife = 0;

// To calculate the time each series took my life
function logOutSeriesText(title, days, hours, minutes) {
    // To calculate series length in minutes
    const seriesLength = days * 24 * 60 + hours * 60 + minutes;
    const percentageOfLife = (seriesLength / averageLifespan) * 100;

    totalPercentageOfLife += percentageOfLife;

    return `${title} took ${percentageOfLife.toFixed(3)}% of my life`;
}

// To call logOutSeriesText for each series
seriesDurations.forEach((series) => {
    // To get title and days and hours and minutes separately from the series
    const { title, days, hours, minutes } = series;
    console.log(logOutSeriesText(title, days, hours, minutes));
});

console.log(`In total that is ${totalPercentageOfLife.toFixed(3)}% of my life`);

console.log(
    "-----------------------------------------------------------------"
);
