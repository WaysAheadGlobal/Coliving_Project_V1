const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const propertyController = require('../controllers/propertyOwnerController');

router.post('/allUsers', userController.GetAllUsers);
router.post('/UserInfo', userController.GetUserDetailById);
router.post('/updateIdProof', userController.updateIDProofDocument);
router.post('/UpdateUniversityIDProof', userController.updateUniveristyIDProofDocument);
router.post('/updateUserStatus', userController.updateUserStatus);
router.post('/PropertyList', propertyController.getOwnersPropertyListForAdmin);
router.post('/DeleteUser', userController.DeleteUser);
router.post('/getDashboardDetails', userController.getDashboardDetails);

module.exports = router;