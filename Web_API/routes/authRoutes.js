const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/signup', authController.signup);
router.post('/signup-verifyotp', authController.signupOTPVerify);
router.post('/login', authController.login);
router.post('/checkuser', authController.checkUser);
module.exports = router;