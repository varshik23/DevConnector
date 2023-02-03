const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator')

// path api/users
// desc register users
// auth public
router.post('/', 
[
    check('name', 'Name is required').not().isEmpty(),
    check('email','Please enter a valid email address').isEmail(),
    check('password','Please enter a valid password').isLength({
        min: 6
    })
],
(req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors: errors.array()});
    }
    console.log(req.body)
    res.send("Welcome to users page");
});

module.exports = router