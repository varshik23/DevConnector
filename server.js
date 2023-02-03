const express = require('express');
const connectDB = require('./config/db');

const app = express();

PORT = process.env.PORT || 5006;

connectDB();

app.get('/', (req, res) => res.send("API testing"));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profiles', require('./routes/api/profiles'));
app.use('/api/posts', require('./routes/api/posts'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));