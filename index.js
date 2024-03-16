const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Define a route for GET requests to the root
app.get('/', (req, res) => {
    res.send('Welcome to the WCBackend API!');
});

// Define a route for POST requests to /api/verify
app.post('/api/verify', (req, res) => {
    console.log('Verification request received:', req.body);
    res.json({ message: 'Verification received', yourData: req.body });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});

