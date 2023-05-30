const express = require('express'); // Import the Express library
const axios = require('axios'); // Import the Axios library for making HTTP requests
const cors = require('cors'); // Import the CORS library for handling cross-origin requests

const app = express(); // Create an Express app instance

app.use(express.json()); // Middleware for parsing JSON request bodies
app.use(cors()); // Middleware for enabling CORS

app.get('/api/country/:name', async (req, res) => {
  const { name } = req.params; // Get the country name from the URL parameters
  try {
    // Make a GET request to the restcountries API with the country name
    const { data } = await axios.get(`https://restcountries.com/v2/name/${name}`);
    res.json(data); // Send the response data as JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching data' }); // Send an error response with a 500 status code and error message
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001'); // Start the server and listen on port 3001
});
