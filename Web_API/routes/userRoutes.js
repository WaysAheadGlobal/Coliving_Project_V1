const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/Profile', userController.getUserProfile);
router.post('/updateProfile', userController.updateUserProfile);
router.post('/savePersonalDetail', userController.saveUpdatePersonalDetails);

module.exports = router;