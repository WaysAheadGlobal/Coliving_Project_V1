const express = require('express');
const router = express.Router();
const commonController = require('../controllers/commonController');
const propertyController = require('../controllers/propertyOwnerController');

router.post('/getListing', commonController.getPropertyListingWithoutLogin);
router.post('/getRoomResidants', propertyController.getRoomResidants);
// router.post('/getListingDetail', commonController.getPropertyListingDetail);
module.exports = router;