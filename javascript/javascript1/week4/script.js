// My code wars profile
// https://www.codewars.com/users/MoeinHeydari/completed_solutions

// Voice assistant

// An object containing regular expressions for matching user commands and their corresponding actions.
const matchesObject = {
    helloMatch: /hello my name is (\w+)/,
    nameMatch: /what is my name/,
    addMatch: /add (.+) to my todo/,
    removeMatch: /remove (.+) from my todo/,
    todoMatch: /what is on my todo/,
    todayMatch: /what day is it today/,
    mathMatch: /what is (\d+)\s*([\s\S])\s*(\d+)/,
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

                case "removeMatch":
                    // Extract the todo to be removed from the matched groups
                    const todoToRemove = match[1];

                    // Find the index of the todo in the todo list
                    const indexToRemove = myTodo.indexOf(todoToRemove);

                    // Check if the todo exists in the todo list.
                    if (indexToRemove !== -1) {
                        // Remove the todo from the todo list using splice.
                        myTodo.splice(indexToRemove, 1);
                        return `Removed ${todoToRemove} from your todo`;
                    } else {
                        return `${todoToRemove} is not in your todo list`;
                    }

                case "todoMatch":
                    if (myTodo.length === 0) {
                        return "Your todo list is empty";
                    } else {
                        let todos = `You have ${myTodo.length} todos - `;
                        // To add an 'and' between todos
                        todos += myTodo.join(" and ");

                        return todos;
                    }

                case "todayMatch":
                    const today = new Date();
                    const day = today.getDate();
                    const month = today.toLocaleString("default", {
                        month: "long",
                    });
                    const year = today.getFullYear();
                    return `${day}. of ${month} ${year}`;

                case "mathMatch":
                    // Extracts two numbers and operator from the matched groups
                    const firstNumber = parseInt(match[1]);
                    const operator = match[2];
                    const secondNumber = parseInt(match[3]);

                    // Initialize the variable that holds the result of the mathematical expression
                    let calculationResult;
                    // Performs the appropriate mathematical operation based on the operator
                    switch (operator) {
                        case "+":
                            calculationResult = firstNumber + secondNumber;
                            break;
                        case "-":
                            calculationResult = firstNumber - secondNumber;
                            break;
                        case "*":
                            calculationResult = firstNumber * secondNumber;
                            break;
                        case "/":
                            calculationResult = firstNumber / secondNumber;
                            break;

                        default:
                            return "Invalid operator";
                    }
                    return calculationResult;
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
console.log(getReply("Remove fishing from my todo")); // "Removed fishing from your todo"
console.log(getReply("Remove cleaning from my todo")); // "cleaning is not in your todo list"
console.log(getReply("What is on my todo?")); // "You have 2 todos - Drinking tea with my friends and singing in the shower"
console.log(getReply("What day is it today?")); // "14. of May 2024"
console.log(getReply("What is 4 ^ 12")); // "Invalid operator"
console.log(getReply("What is 4 * 12")); // "48"
