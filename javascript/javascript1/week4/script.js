// My code wars profile
// https://www.codewars.com/users/MoeinHeydari/completed_solutions

// Voice assistant

// An object containing regular expressions for matching user commands and their corresponding actions.
const matchesObject = {
    helloMatch: /hello my name is (\w+)/,
    nameMatch: /what is my name/,
    addMatch: /add (.+) to my todo/,
};

// Initializing a variable and an empty array for storing data
let name = "";
const myTodo = [];

// Process user commands, matches them against patterns, and returns responses based on the command
function getReply(command) {
    command = command.toLowerCase(); // Convert the command to lowercase

    // Iterate over each key-value pair in the matchesObject to find a match
    for (const [key, value] of Object.entries(matchesObject)) {
        // Attempt to match the command against the current value (regular expression)
        const match = command.match(value);

        // Only if a match is found, enter to the switch case
        if (match) {
            switch (key) {
                case "helloMatch":
                    // Extract the name from the matched groups
                    name = match[1];
                    // To make the first letter capital
                    name = name.charAt(0).toUpperCase() + name.slice(1);

                    return `Nice to meet you ${name}`;

                case "nameMatch":
                    if (!name) {
                        return `I don't know your name`;
                    } else return `Your name is ${name}`;

                case "addMatch":
                    // Extract the todo from the matched groups
                    const todo = match[1];
                    myTodo.push(todo);
                    return `${todo} added to your todo`;
            }
        }
    }
    // If the command do not match with any value of the matchesObject, then
    return "Sorry, I didn't understand that command.";
}

console.log(getReply("What is my name?")); // "I don't know your name"
console.log(getReply("What is on my todo?")); // "Your todo list is empty"
console.log(getReply("Hello my name is benJAMin")); // "Nice to meet you Benjamin"
console.log(getReply("What is my name?")); // "Your name is Benjamin"
console.log(getReply("Add fishing to my todo")); // "fishing added to your todo"
console.log(getReply("Add drinking tea with my friends to my todo")); // "drinking tea with my friends added to your todo"
console.log(getReply("Add singing in the shower to my todo")); // "singing in the shower added to your todo"
