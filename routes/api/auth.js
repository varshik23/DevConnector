const express = require('express');
const router = express.Router();

// path api/auth
// auth public
router.get('/', (req, res) => {
    res.send("Welcome to Auth page");
});

module.exports = router