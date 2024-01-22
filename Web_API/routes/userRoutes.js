const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const propertyController = require('../controllers/propertyOwnerController');

router.post('/Profile', userController.getUserProfile);
router.post('/updateProfile', userController.updateUserProfile);
router.post('/savePersonalDetail', userController.saveUpdatePersonalDetails);
router.post('/myWaitingList', propertyController.getWaitingListPropertyListing);
module.exports = router;