const express = require('express');

const contactController = require('../Controllers/contact');

const router = express.Router();

router.get('/', contactController.getContact);

module.exports = router;