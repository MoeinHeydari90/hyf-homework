const http = require("http"); // Import the http module to create an HTTP server
const url = require("url"); // Import the url module to parse URL query parameters

// Function to calculate average
function calculateAverage(numbers) {
    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum / numbers.length;
}

// Create an HTTP server
const server = http.createServer((req, res) => {
    // Parse the query parameters from the URL
    const queryObject = url.parse(req.url, true).query;
    // Get the numbers from the query parameters, if provided, and convert them to an array of numbers
    const numbers = queryObject.numbers ? queryObject.numbers.split(",").map(Number) : [];

    // Check if there are no numbers or if any of the numbers are not valid
    if (numbers.length === 0) {
        // Respond with a 400 Bad Request if no numbers are provided
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end(
            "No numbers provided. Please provide a list of numbers as a query parameter, e.g., ?numbers=1,17,0.5"
        );
    } else if (numbers.some(isNaN)) {
        // Respond with a 400 Bad Request if any of the provided values are not valid numbers
        res.writeHead(400, { "Content-Type": "text/plain" });
        res.end(
            "Invalid input. Please provide a valid list of numbers as a query parameter, e.g., ?numbers=1,17,0.5"
        );
    } else {
        // Calculate the average of the numbers
        const average = calculateAverage(numbers);
        // Respond with the calculated average
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(`The average is: ${average}`);
    }
});

// Listen on port 8080
server.listen(8080, () => {
    console.log("Server running at http://localhost:8080/"); // This log message will be displayed in the terminal when the server is successfully running and ready to accept requests.
});
