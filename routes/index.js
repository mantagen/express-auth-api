const express = require('express');

const signup = require('./signup');
const login = require('./login');
const logout = require('./logout');
const user = require('./user');
const userByUsername = require('./userByUsername');

const router = express.Router();

router.post('/signup', signup.post)
router.post('/login', login.post)
router.post('/logout', logout.post)
router.get('/user/:username', userByUsername.get)
router.get('/user', user.get)

module.exports = router;
