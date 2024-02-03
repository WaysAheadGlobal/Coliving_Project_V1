const express = require('express');
const router = express.Router();
const commonController = require('../controllers/commonController');

router.post('/getListing', commonController.getPropertyListingWithoutLogin);
// router.post('/getListingDetail', commonController.getPropertyListingDetail);
module.exports = router;