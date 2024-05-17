// My code wars profile
// https://www.codewars.com/users/MoeinHeydari/completed_solutions

// Voice assistant

// An object containing regular expressions for matching user commands and their corresponding actions.
const matchesObject = {
    helloMatch: /hello my name is (\w+)/, // Fx: Hello my name is Benjamin
    nameMatch: /what is my name/,
    addMatch: /add (.+) to my todo/, // Fx: Add fishing to my todo
    removeMatch: /remove (.+) from my todo/, // Fx: Remove fishing from my todo
    todoMatch: /what is on my todo/,
    todayMatch: /what day is it today/,
    mathMatch: /what is (\d+)\s*([\s\S])\s*(\d+)/, // Fx: what is 4 * 12
    timerMatch: /set a timer for (\d+) minutes/, // Fx: Set a timer for 10 minutes
    birthdayMatch: /my birthday is (\d{1,2})\/(\d{1,2})\/(\d{2,4})/, // Fx: My birthday is 30/5/1982
};

// An object containing operations for "mathMatch"
const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => a / b,
};

// Initializing a variable and an empty array for storing data
let name = "";
const myTodo = [];

// Function to handle "helloMatch"
function helloMatch(match) {
    // To make the first letter capital
    name = match[1].charAt(0).toUpperCase() + match[1].slice(1);
    return `Nice to meet you ${name}`;
}

// Function to handle "nameMatch"
function nameMatch() {
    return name ? `Your name is ${name}` : "I don't know your name";
}

// Function to handle "addMatch"
function addMatch(match) {
    const todo = match[1];
    myTodo.push(todo);
    return `${todo} added to your todo`;
}

// Function to handle "removeMatch"
function removeMatch(match) {
    const todoToRemove = match[1];
    // Find the index of the todo in the todo list
    const indexToRemove = myTodo.indexOf(todoToRemove);

    // Check if the todo exists in the todo list
    if (indexToRemove !== -1) {
        // Remove the todo from the todo list using splice
        myTodo.splice(indexToRemove, 1);
        return `Removed ${todoToRemove} from your todo`;
    } else {
        return `${todoToRemove} is not in your todo list`;
    }
}

// Function to handle "todoMatch"
function todoMatch() {
    if (myTodo.length === 0) {
        return "Your todo list is empty";
    } else {
        let todos = `You have ${myTodo.length} todos - `;
        todos += myTodo.join(" and ");
        return todos;
    }
}

// Function to handle "todayMatch"
function todayMatch() {
    const today = new Date();
    const day = today.getDate();
    const month = today.toLocaleString("default", { month: "long" });
    const year = today.getFullYear();
    return `${day}. of ${month} ${year}`;
}

// Function to handle "mathMatch"
function mathMatch(match) {
    // Extracts two numbers and operator from the matched groups
    const firstNumber = parseInt(match[1]);
    const operator = match[2];
    const secondNumber = parseInt(match[3]);

    // Checks if the operator is valid and performs the corresponding operation
    if (operations[operator]) {
        // Calls the function associated with the operator to calculate the result
        const calculationResult = operations[operator](
            firstNumber,
            secondNumber
        );
        return calculationResult;
    } else {
        return "Invalid operator";
    }
}

// Function to handle "timerMatch"
function timerMatch(match) {
    // Parses the minutes from the match object and converts it to an integer
    const minutes = parseInt(match[1]);

    // Sets a timer to execute a callback function after the specified number of minutes
    setTimeout(() => {
        console.log("Timer done");
    }, minutes * 60 * 1000);
    return `Timer set for ${minutes} minutes`;
}

// Function to handle "birthdayMatch"
function birthdayMatch(match) {
    // Declare day, month, and year as separate variables
    const day = parseInt(match[1]);
    const month = parseInt(match[2]);
    const year = parseInt(match[3]);

    // Construct the birthDate object using the declared variables
    const birthDate = new Date(`${day}/${month}/${year}`);

    const age = new Date().getFullYear() - birthDate.getFullYear();
    return `You are ${age} years old`;
}

// Process user commands, matches them against patterns, and returns responses based on the command
function getReply(command) {
    command = command.toLowerCase(); // Convert the command to lowercase

    for (const [key, value] of Object.entries(matchesObject)) {
        const match = command.match(value);
        if (match) {
            switch (key) {
                case "helloMatch":
                    return helloMatch(match);
                case "nameMatch":
                    return nameMatch();
                case "addMatch":
                    return addMatch(match);
                case "removeMatch":
                    return removeMatch(match);
                case "todoMatch":
                    return todoMatch();
                case "todayMatch":
                    return todayMatch();
                case "mathMatch":
                    return mathMatch(match);
                case "timerMatch":
                    return timerMatch(match);
                case "birthdayMatch":
                    return birthdayMatch(match);
            }
        }
    }
    return "Sorry, I didn't understand that command.";
}

console.log(getReply("What is my name?")); // "I don't know your name"
console.log(getReply("What is on my todo?")); // "Your todo list is empty"
console.log(getReply("Hello my name is benJAMin")); // "Nice to meet you Benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("Add drinking tea with my friends to my todo")); // "drinking tea with my friends added to your todo"
console.log(getReply("Add singing in the shower to my todo")); // "singing in the shower added to your todo"
console.log(getReply("Remove fishing from my todo")); // "Removed fishing from your todo"
console.log(getReply("Remove cleaning from my todo")); // "cleaning is not in your todo list"
console.log(getReply("What is on my todo?")); // "You have 2 todos - drinking tea with my friends and singing in the shower"
console.log(getReply("What day is it today?")); // "14. of May 2024"
console.log(getReply("What is 4 ^ 12")); // "Invalid operator"
console.log(getReply("What is 4 * 12")); // "48"
console.log(getReply("Set a timer for 4 minutes")); // "Timer set for 4 minutes"
console.log(getReply("My birthday is 10/12/1990")); // "You are 33 years old"
console.log(getReply("The show must go on")); // "Sorry, I didn't understand that command."
