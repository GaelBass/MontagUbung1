const express = require('express');
const dataClient = require('./client');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Define routes

app.get('/CLIENTS', async (req, res) => {
  try {
    const result = await dataClient.query('SELECT * FROM CLIENTS');
    res.json(result.rows);
  } catch (err) {
    console.error('Error retrieving users:', err.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
