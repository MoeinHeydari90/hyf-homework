// Age-ify (A future age calculator)
const yearOfBirth = 1990;
const yearFuture = 2030;
const age = yearFuture - yearOfBirth;
console.log("You will be " + age + " years old in " + yearFuture);

// Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2017;
const dogYearFuture = 2030;
let dogYear = dogYearFuture - dogYearOfBirth;
let typeOfYears = "human"; // Default type of years set to "human"

// Determine whether to show the result in dog years or human years
const shouldShowResultInDogYears = true; //change this to false if you want to see results in human years
if (shouldShowResultInDogYears) {
    dogYear *= 7;
    typeOfYears = "dog";
}
console.log(
    "Your dog will be " +
        dogYear +
        " " +
        typeOfYears +
        " years old in " +
        dogYearFuture
);

//Housey pricey (A house price estimator)

// Array containing information about friends houses
const friendsHouseInformation = [
    {
        name: "Peter",
        houseWide: 8,
        houseDeep: 10,
        houseHigh: 10,
        gardenSizeInM2: 100,
        houseCost: 2500000,
    },
    {
        name: "Julia",
        houseWide: 5,
        houseDeep: 11,
        houseHigh: 8,
        gardenSizeInM2: 70,
        houseCost: 1000000,
    },
];
let offer = "too much"; // Default offer set to "too much"

// Loop through each friend's house information
for (const i of friendsHouseInformation) {
    volumeInMeters = i.houseWide * i.houseDeep * i.houseHigh;
    housePrice = volumeInMeters * 2.5 * 1000 + i.gardenSizeInM2 * 300;

    // Determine if the offer is too little based on the comparison between house price and house cost
    if (housePrice > i.houseCost) offer = "too little";

    console.log(`because the house price is ${housePrice} and ${i.name} 
    is paying ${i.houseCost}, this offer is ${offer} for this house.`);
}

//Ez Namey (Startup name generator) Optional

// Define two arrays containing possible first and second words for startup names
const firstWords = [
    "Tech",
    "Innovate",
    "Spark",
    "Nexus",
    "Swift",
    "Zenith",
    "Quantum",
    "Fusion",
    "Apex",
    "Visionary",
];
const secondWords = [
    "Labs",
    "Solutions",
    "Ventures",
    "Studio",
    "Innovations",
    "Hub",
    "Forge",
    "Co",
    "Works",
    "Dynamics",
];

// Generate a random startup name by selecting a random first word and a random second word
const startupName =
    firstWords[Math.floor(Math.random() * 10)] +
    " " +
    secondWords[Math.floor(Math.random() * 10)];

// Print the generated startup name and its length to the console
console.log(
    `The startup: ${startupName} contains ${startupName.length} characters`
);
