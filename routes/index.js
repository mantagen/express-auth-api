const express = require('express');

const signup = require('./signup');
const login = require('./login')
const user = require('./user');

const router = express.Router();

router.post('/signup', signup.post)
router.post('/login', login.post)
router.get('/user', user.get)

module.exports = router;
