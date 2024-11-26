const express = require('express');
const app = express();
const path = require('path');

// Serve static files (CSS, JS, images)
app.use(express.static(path.join(__dirname, 'www')));

// Serve the home page (index.html)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'www', 'index.html'));
});

// API endpoint to serve mante.json
app.get('/api/mante', (req, res) => {
  res.sendFile(path.join(__dirname, 'mante.json'));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server in ascolto su http://localhost:${PORT}`);
});