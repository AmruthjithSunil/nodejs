const express = require('express');

const successController = require('../Controllers/succeess');

const router = express.Router();

router.post('/', successController.postSuccess);

module.exports = router;