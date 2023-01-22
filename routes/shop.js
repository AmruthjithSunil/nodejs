const express = require('express');

const shopController = require('../Controllers/shop');

const router = express.Router();

router.get('/', shopController.getShop);

module.exports = router;