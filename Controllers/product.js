const path = require('path');
const rootDir = require('../util/path');

exports.getProduct = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
}

exports.postProduct = (req, res, next) => {
    console.log('title : ' + req.body.title);
    res.redirect('/admin/add-product');
}