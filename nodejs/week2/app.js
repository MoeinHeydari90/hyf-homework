import express from "express";
import fs from "fs";

const app = express();
const port = process.env.PORT || 3000;

// Support parsing JSON requests
app.use(express.json());

// Load documents from the JSON file
let documents = [];
try {
    const data = fs.readFileSync("documents.json", "utf8"); // Read and parse the documents.json file
    documents = JSON.parse(data);
} catch (err) {
    console.error("Error reading documents.json file:", err);
}

// Define the GET /search endpoint
app.get("/search", (req, res) => {
    const { q } = req.query; // Get the 'q' query parameter from the request

    if (!q) {
        // If 'q' is not provided, return all documents
        return res.json(documents);
    }

    // If 'q' is provided, filter documents based on the query
    const filteredDocs = documents.filter((doc) =>
        Object.values(doc).some(
            (value) => value.toString().toLowerCase().includes(q.toLowerCase()) // Case-insensitive search
        )
    );

    // Return the filtered documents
    res.json(filteredDocs);
});

app.get("/", (req, res) => {
    res.send("This is a search engine");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
