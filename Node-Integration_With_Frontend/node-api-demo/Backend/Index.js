const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); 
app.use(express.json()); 


const users = [];

// GET all users
app.get('/api/users', (req, res) => {
  res.json(users);
});


app.post('/api/users', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const newUser = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
