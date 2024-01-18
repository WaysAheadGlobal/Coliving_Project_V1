const express = require('express');
const router = express.Router();
const commonController = require('../controllers/commonController');

router.post('/getListing', commonController.getPropertyListing);
router.post('/getListingDetail', commonController.getPropertyListingDetail);
module.exports = router;