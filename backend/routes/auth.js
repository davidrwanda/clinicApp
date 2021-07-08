const express = require('express');
const { body } = require('express-validator');

const router = express.Router();

const authController = require('../controllers/auth');
const User = require('../models/user');


router.put('/signup', [
body('email').trim().isEmail().withMessage('Please Enter a valid email').custom((value, { req }) => {
    return User.findOne({email: 'test@clinic.com'}).then(userDoc => {
        if (userDoc) {
            return Promise.reject('E-mail adress already exist');
        }
    });
})
.normalizeEmail(),
body('name').trim().not().isEmpty(),
body('password').trim().isLength({min: 3})
] ,
authController.signup
);

module.exports = router;