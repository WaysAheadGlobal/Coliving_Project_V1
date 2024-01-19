const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/allUsers', userController.GetAllUsers);
router.post('/UserInfo', userController.GetUserDetailById);
module.exports = router;