const express = require('express');
const router = express.Router();

// path api/profiles
// auth private
router.get('/', (req, res) => {
    res.send("Welcome to profiles page");
});

module.exports = router