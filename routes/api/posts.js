const express = require('express');
const router = express.Router();

// path api/posts
// auth public
router.get('/', (req, res) => {
    res.send("Welcome to posts page");
});

module.exports = router