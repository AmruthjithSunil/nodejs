const express = require('express');

const errorController = require('../Controllers/404');

const router = express.Router();

console.log('routes/404');
router.use(errorController.get404);

module.exports = router;