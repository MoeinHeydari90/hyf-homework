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

console.log(getEventWeekday(1)); // It returns tomorrow's weekday

console.log(
    "--------------------------------------------------------------------"
);
