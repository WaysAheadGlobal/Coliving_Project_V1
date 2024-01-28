const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const propertyController = require('../controllers/propertyOwnerController');

router.post('/Profile', userController.getUserProfile);
router.post('/updateProfile', userController.updateUserProfile);
router.post('/savePersonalDetail', userController.saveUpdatePersonalDetails);
router.post('/myWaitingList', propertyController.getWaitingListPropertyListing);
router.post('/getMyStayRequests', propertyController.getMyStayRequests);
router.post('/GetMyNotifications', userController.GetMyNotifications);
router.post('/saveBookingInfo', propertyController.saveBookingInfo);
router.post('/getPaymentsInfo', userController.getPaymentsInfo);
router.post('/getPropertyOwnerStayRequest', userController.getmyStayRequest);
router.post('/getUserInfoForPropertyOwner', userController.getUserInfoForPropertyOwner);
router.post('/getPropertyResidants', propertyController.getPropertyResidants);
router.post('/getPropertyWaitingList', propertyController.getPropertyWaitingList);
router.post('/ApproveRejectStayRequest', userController.ApproveRejectStayRequest);
router.post('/CheckBookingStatus', userController.CheckBookingSTatus);



module.exports = router;