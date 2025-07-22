// Import the Express library (a fast, minimal web framework for Node.js)
const express = require('express');

// Load Node's built-in 'path' module
// It's used to safely construct file paths across different operating systems
const path = require('path');

// Create an instance of an Express application
const app = express();

// Define a route handler for the root URL ('/')
// When a GET request is made to '/', this function runs
// app.get('/', (req, res) => {
//   // Send an HTML response back to the client
//   res.send('<h1>Hello, World!!</h1>');
// });

// app.get('/', (req, res) => {
//   // Handle GET requests to the root URL ('/')
//   // Respond by sending the HTML file located in the 'public' folder

//   // __dirname gives the absolute path to the current directory
//   // path.join(...) builds a complete file path to 'public/index.html'
//   // res.sendFile(...) sends that HTML file as the response
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// })

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Define the port number the server will listen on
// Uses the environment variable PORT if available, otherwise defaults to 3000
const PORT = process.env.PORT || 3000;

// Start the server and listen on the specified port
// Once the server starts, log a message to the console
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));