const { validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');

const User = require('../models/user')


exports.signup = (req, res, next) => {

    const errors = validationResult(req);

    if (!errors.isEmpty) {
        const error = new Error('Validation failed.');
        error.statusCode = 422;
        error.data = console.errors.array();
        throw error;
    }

    //   const name = req.body.name;
    //   const email = req.body.email;
    //   const phone = req.body.phone;
    //   const username = req.body.username;
    //   const role = req.body.role;
    //   const qualification = req.body.password;
    //   const password = req.body.password;
      const name = "DAVID NTAMAKEMWA";
      const email = "test@clinic.com";
      const phone = "12234567";
      const username = "";
      const role = "dummy";
      const qualification = "A0";
      const password = "12345";

      bcrypt
      .hash(password, 12)
      .then(hasspw => {
          const user = new User({
              name: name,
              email: email,
              phone: phone,
              username: username,
              role: role,
              qualification: qualification,
              password: password
          });
          return user.save();
      })
      .then(result => {
          res.status(201).json({message: 'user created!', userId: result.id});
      })
      .catch(err => {
          if(!err.statusCode) {
              err.statusCode = 500;
          }
          next(err);
      });

};