require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const playersRoute = require('./routes/players');

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/baseball';

// Connect to MongoDB
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/players', playersRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

