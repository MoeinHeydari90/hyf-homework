// * My free code camp link : https://www.freecodecamp.org/fcc733a70bc-2aaa-4346-b4d1-7b85038190f9

// Flight booking fullname function

function getFullname(firstname, surname, sex, useFormalName = false) {
    let prefix = "";

    if (useFormalName) {
        if (sex === "male") prefix = "Lord";
        else if (sex === "female") prefix = "Lady";
        else console.log("Please enter a valid gender");
    }

    return `${prefix} ${firstname} ${surname}`;
}
fullname1 = getFullname("Benjamin", "Hughes", "male");
fullname2 = getFullname("Beatrice", "Jackson", "female", true);

console.log(fullname1);
console.log(fullname2);

console.log(
    "--------------------------------------------------------------------"
);

// Event application

function getEventWeekday(eventInDays) {
    const weekdays = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    const today = new Date().getDay(); // Get today's weekday index
    const eventDayIndex = (today + eventInDays) % 7; // Calculate the index of the event day

    return weekdays[eventDayIndex];
}
const getRandomNumber = () => Math.floor(Math.random() * 20) + 1; // return a random number between 1 to 20
const randomNumber = getRandomNumber(); // The random number of days that we will have the Event
const eventDay = getEventWeekday(randomNumber);

console.log(`It's ${eventDay} in ${randomNumber} days`);

console.log(
    "--------------------------------------------------------------------"
);

//Weather wear

function suggestClothes(temperature) {
    if (temperature <= 0)
        return `For weather ${temperature} degrees, Heavy winter coat is recommended`;
    else if (temperature <= 10)
        return `For weather ${temperature} degrees, Warm pants or jeans is recommended`;
    else if (temperature <= 20)
        return `For weather ${temperature} degrees, Light jacket or sweater is recommended`;
    else if (temperature <= 30)
        return `For weather ${temperature} degrees, T-shirt or blouse is recommended`;
    else
        return `For weather ${temperature} degrees, Light, breathable clothing is recommended`;
}

const getRandomTemperature = () => Math.floor(Math.random() * 51) - 10; // return a random number between -10 to +40
const clothesToWear = suggestClothes(getRandomTemperature());

console.log(clothesToWear);

console.log(
    "--------------------------------------------------------------------"
);

// Student manager

const class07Students = [];

function addStudentToClass(name) {
    const trimmedName = name.trim();
    // To remove white space before or after of the name
    if (trimmedName === "") {
        // To avoid adding an empty string to the class
        console.log("We cannot add an empty string to the class");
    } else if (class07Students.includes(trimmedName)) {
        // To avoid adding a student who has already been added to the class
        console.log(`Student ${trimmedName} is already in the class`);
    } else if (class07Students.length < 6 || trimmedName === "Queen") {
        // Maximum class members are 6 unless we want to add the Queen
        class07Students.push(trimmedName);
    } else if (class07Students.length >= 6) {
        console.log("Cannot add more students to class 07");
    }

    console.log(class07Students);
}

addStudentToClass("Emma");
addStudentToClass("Alex");
addStudentToClass("  "); // To examine the forth requirement (You cannot add an empty string to a class)
addStudentToClass("Alex"); // To examine the second requirement (The same person cannot be added to the class)
addStudentToClass("Lars");
addStudentToClass("Bob");
addStudentToClass("Rico");
addStudentToClass("Tina");
addStudentToClass("Sarah"); // To examine the first requirement (There can be only 6 students in a class)
addStudentToClass("Queen"); // To examine the third requirement (if the Queen is added to the class she should always get a space)

console.log(
    `number of students in the class is ${class07Students.length} students`
);

console.log(
    "--------------------------------------------------------------------"
);

// Candy helper

let boughtCandyPrices = [];

const candyTablePrice = {
    sweet: 0.5,
    chocolate: 0.7,
    toffee: 1.1,
    "chewing-gum": 0.03,
};

//Price calculator for each candy based on its weight
function addCandy(candyType, weight) {
    const candyPrice = candyTablePrice[candyType].toFixed(2) * weight; // "toFixed(2)" the price is always represented with two decimal places
    boughtCandyPrices.push(candyPrice);
    console.log(
        `candyType:${candyType}  weight:${weight}  candyPrice:${candyPrice}`
    );
}

const amountToSpend = Math.round(Math.random() * 100 + 1); // "+ 1" to make the minimum number 1
console.log("amountToSpend: " + amountToSpend); // Amount of available money to buy candy

// To check the possibility of buying more candy
function canBuyMoreCandy() {
    let totalSpent = 0;
    for (let price of boughtCandyPrices) {
        totalSpent += price;
    }
    console.log("totalSpent: " + totalSpent.toFixed(2));

    totalSpent < amountToSpend
        ? console.log("You can buy more, so please do!")
        : console.log("Enough candy for you!");

    return totalSpent < amountToSpend; // As long as we still have amount to spend this function will return true
}

const candies = Object.keys(candyTablePrice); // To get the list of candies from the candies price table

while (canBuyMoreCandy()) {
    // To choose a random candy each time
    let randomIndex = Math.floor(Math.random() * candies.length);
    let randomCandy = candies[randomIndex];

    // Adding candy until the budget is over
    addCandy(randomCandy, Math.round(Math.random() * 50 + 1));
}
