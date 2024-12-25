const express = require('express');
const app = express();

// Middleware function
app.use((req, res, next) => {
    console.log(`Request Method: ${req.method}, URL: ${req.url}`);
    next(); // Pass control to the next handler
});

// Route handler
app.get('/', (req, res) => {
    res.send('Hello from the root route!');
});

app.get('/about', (req, res) => {
    res.send('About page!');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
