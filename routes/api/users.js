const express = require('express');
const router = express.Router();

// path api/users
// auth public
router.get('/', (req, res) => {
    res.send("Welcome to users page");
});

module.exports = router