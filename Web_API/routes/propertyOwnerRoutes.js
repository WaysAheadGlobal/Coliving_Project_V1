const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyOwnerController');

router.post('/SaveProperty', propertyController.savePropertyInfo);
router.post('/getOwnerProperty', propertyController.getOwnerPropertyInfo);
router.post('/getOwnerPropertyByPropertyId', propertyController.getOwnerPropertyInfoByProertyId);
router.post('/AddRemovePropertyToWaitingList', propertyController.AddRemovePropertyToWaitingList);

module.exports = router;