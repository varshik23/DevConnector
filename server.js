const express = require('express');
const connectDB = require('./config/db');

const app = express();

PORT = process.env.PORT || 5006;

connectDB()

app.get('/', (req, res) => res.send("API testing"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));