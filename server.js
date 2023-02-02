const express = require('express');

const app = express();

PORT = process.env.PORT || 5006;

app.get('/', (req, res) => res.send("API testing"));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));