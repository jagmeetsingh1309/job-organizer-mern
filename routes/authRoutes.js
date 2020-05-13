const express = require('express');

const authController = require('../controllers/authController');

const router  = express.Router();

router.post('/register', authController.postSignup );

router.post('/login',authController.postLogin);

module.exports = router;