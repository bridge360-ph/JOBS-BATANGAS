const express = require('express');
const { signup, signin, logout, userProfile } = require('../controllers/authController');
const { isAuthenticated } = require('../middleware/auth');
const router = express.Router();

//auth routes
//api for sign up
router.post('/signup', signup);
//api for sign up
router.post('/signin', signin);
//api for log out
router.get('/logout', logout);
//api for me
router.get('/me', isAuthenticated, userProfile);

module.exports = router;