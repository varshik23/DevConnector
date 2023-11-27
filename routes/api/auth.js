const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');
// path api/auth
// auth public
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.post('/', 
    [
        check('email','Please enter a valid email address').isEmail(),
        check('password','Please enter a password').exists()
    ],
    async (req, res) => {
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({errors: errors.array()});
            }

            const { email, password} = req.body;

            let user = await User.findOne({ email })

            if(!user) {
                return res.status(400).json({errors: [{"msg": "Invalid credentials"}]});
            }


            const isMatch = await bcrypt.compare(password, user.password);

            if(!isMatch) {
                return res.status(400).json({errors: [{"msg": "Invalid credentials"}]});
            }

            const payload = {
                user: {
                    id: user.id,
                }
            };

            jwt.sign(
                payload,
                config.get('jwtToken'),
                {expiresIn : 360000},
                (err, token) => {
                    if(err) throw err;
                    res.json({ token })
                }
            )
        }
        catch(err) {
            console.log(err);
            res.status(500).json({errors: [{msg:"server error"}]})
        }
});

module.exports = router