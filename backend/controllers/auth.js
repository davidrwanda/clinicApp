const { validationResult } = require('express-validator/check');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
      const password = "1234";

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
              password: hasspw
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

exports.login = (req, res, next) => {
    // const email = req.body.email;
    // const password = req.body.password;

    const email = 'test@clinic.com';
    const password = '1234';
    let loadedUser;
    User.findOne({where:{email: email}})
      .then(user => {
          if (!user) {
              const error = new Error(' A user with this email could not be found.');
              error.statusCode = 401;
              throw error;
          }
          loadedUser = user;
          return bcrypt.compare(password, loadedUser.password);
      })
      .then(isEqual => {
          if (!isEqual) {
              const error = new Error('Wrong password');
              error.statusCode = 401;
              console.log(isEqual);
              console.log(password)
              console.log (loadedUser.password);
              throw error;
              
          }

          const token = jwt.sign(
              {
                  email: loadedUser.email,
                  userId: loadedUser.id.toString()
              },
              'somesupersecretsecret',
              {
                  expiresIn: '1h'
              }
          );
          res.status(201).json({token: token, userId: loadedUser.id.toString()});
          console.log(token);
      })
      .catch(err => {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });

}