const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const config = require('../production');
const User = require('../models/User');

exports.postSignup = (req,res,next) => {
    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email: email})
        .then(user => {
            if(!user){
                return bcrypt.hash(password, 12);
            }
            const error = new Error();
            error.message = 'E-mail Already Exists.'
            error.statusCode = 400;
            throw error;
        })
        .then(hashedPassword => {
            const newUser = new User({
                email: email,
                password: hashedPassword
            });
            return newUser.save()
        })
        .then(user => {
            console.log('user created successfully.');
            return res.status(201).json({
                message: 'user created',
                user: user
            })
        })
        .catch(err => next(err));
};

exports.postLogin = (req,res,next) => {
    const email = req.body.email;
    const password = req.body.password;

    let loadedUser;

    User.findOne({ email: email })
        .then(user => {
            if(!user){
                const error = new Error();
                error.statusCode = 401;
                error.message = 'No user found.';
                throw error
            } 
            loadedUser = user;
            return bcrypt.compare(password, user.password);
        })
        .then(isEqual => {
            if(!isEqual){
                const error = new Error();
                error.statusCode = 401;
                error.message = 'Password do not match';
                throw error;
            }
            const payload = {
                userId: loadedUser._id.toString(),
                email: loadedUser.email
            }
            const token = jwt.sign(payload,config.JWT_SECRET);
            return res.status(200).json({
                userId: loadedUser._id.toString(),
                token: token,
                email: loadedUser.email
            });
            
        })
        .catch(err => next(err));
}