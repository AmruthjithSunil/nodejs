const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
})

router.post('/add-product', (req, res, next) => {
    console.log('title : ' + req.body.title);
    console.log('size : ' + req.body.size);
    res.redirect('/admin/add-product');
})

module.exports = router;