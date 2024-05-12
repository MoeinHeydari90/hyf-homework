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
function logOutSeriesText(series) {
    // To get title and days and hours and minutes separately from the series
    const { title, days, hours, minutes } = series;

    // To calculate series length in minutes
    const seriesLength = days * 24 * 60 + hours * 60 + minutes;
    const percentageOfLife = (seriesLength / averageLifespan) * 100;

    totalPercentageOfLife += percentageOfLife;

    return `${title} took ${percentageOfLife.toFixed(3)}% of my life`;
}

// To call logOutSeriesText for each series
seriesDurations.forEach((series) => {
    console.log(logOutSeriesText(series));
});

//seriesDurations.forEach((series) => {
// console.log(logOutSeriesText(series));
//}

console.log(`In total that is ${totalPercentageOfLife.toFixed(3)}% of my life`);

console.log(
    "-----------------------------------------------------------------"
);

//NOnoN0nOYes (Note taking app)

const notes = [];

function saveNote(content, id) {
    // To avoid adding empty content
    if (content) {
        // Create a new note object with content and id
        const note = { content, id };
        notes.push(note);
    }
}

saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

function getNote(id) {
    for (const note of notes) {
        if (note.id === id) {
            return note;
        }
    }
}

const firstNote = getNote(1);
console.log(firstNote); // {content: 'Pick up groceries', id: 1}

function logOutNotesFormatted() {
    for (const note of notes)
        console.log(
            `The note with id: ${note.id}, has the following note text: ${note.content}`
        );
}

logOutNotesFormatted(); // should log out the text below

// The note with id: 1, has the following note text: Pick up groceries
// The note with id: 2, has the following note text: Do laundry

// This part of the code is copied from: https://codepen.io/dalsHughes/pen/poJGejX
const textarea = document.querySelector("textarea");
const ul = document.querySelector("ul");
let noteId = 0;

document.querySelector("button.add-note").addEventListener("click", () => {
    saveNote(textarea.value, noteId);
    noteId++;
    textarea.value = "";

    // Clear the ul
    ul.innerHTML = "";
    notes.forEach((note) => {
        const li = document.createElement("li");
        li.innerHTML = note.content;

        // ! ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
        // I think these would make the app better,
        // if a note is important, the user can make its background red by clicking on it,
        // also if a note is done, the user by double-clicking on it will make it line-through

        // To make a note Important by adding a class with red background color
        li.onclick = () => li.classList.toggle("isImportant");

        // To make a note Done by adding a class with line-through style
        li.ondblclick = () => li.classList.toggle("isDone");
        // ! ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

        ul.appendChild(li);
    });
});

document
    .querySelector("button.log-out")
    .addEventListener("click", logOutNotesFormatted);

console.log(
    "-----------------------------------------------------------------"
);

// CactusIO-interactive (Smart phone usage app) optional

// Adding an activity

// Initializing an empty array for restoring the activities
const activities = [];

// To get the activity day in this format: 2/30/2024
const today = new Date();
const activityDay = today.toLocaleDateString();

// To create an object from any activity and then adding it to the activities array
function addActivity(activity, duration) {
    activities.push({
        date: activityDay,
        activity: activity,
        duration: duration,
    });
}

addActivity("Youtube", 30);
addActivity("Instagram", 40);
addActivity("Facebook", 8);
addActivity("Gaming", 20);

// Show my status

// Default value for usage limit
const usageLimit = 90;

// To check the total time of the activities and compare it with the specified limit value
function showStatus(activities) {
    if (activities.length === 0) {
        return "Add some activities before calling showStatus";
    }
    // The initial value of the variable that will accumulate the durations of the activities
    let totalDuration = 0;

    for (const activity of activities) {
        totalDuration += activity.duration;
    }

    let status = `You have added ${activities.length} activities. They amount to ${totalDuration} min. of usage`;

    if (totalDuration > usageLimit) {
        status +=
            "\nYou have reached your limit, no more smart-phoning for you!";
    }

    return status;
}

console.log(showStatus(activities));

// To find the activity that the user spent the most time on
function mostTimeActivity(activities) {
    // The initial value of two variables that we are looking for it in the activities array
    let maxDuration = 0;
    let mostTimeSpentActivity = "";

    for (const activity of activities) {
        if (activity.duration > maxDuration) {
            maxDuration = activity.duration;
            mostTimeSpentActivity = activity.activity;
        }
    }

    return { mostTimeSpentActivity, maxDuration };
}

// To get the most used activity and its duration
const { mostTimeSpentActivity: activity, maxDuration } =
    mostTimeActivity(activities);

console.log(
    `The activity with the most time spent is: ${activity} with duration: ${maxDuration}`
);
