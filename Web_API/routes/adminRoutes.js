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
router.post('/PropertyDetailByPropertyId', propertyController.PropertyDetailByPropertyId);
router.post('/updatePropertyStatus', userController.updatePropertyStatus);
router.post('/getPropertyStayRequest', userController.getAdminStayRequest);
router.post('/getUserInfoForPropertyOwnerForAdmin', userController.getUserInfoForPropertyOwnerForAdmin);
router.post('/GetAdminNotifications', userController.getAdminNotifications);
module.exports = router;