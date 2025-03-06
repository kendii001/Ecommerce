const express = require('express');
const cors = require('cors'); // Install cors package: npm install cors
const app = express();

// Enable CORS for all routes
app.use(cors());

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
