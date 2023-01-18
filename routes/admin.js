const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">send</button></form>');
})

router.post('/add-product', (req, res, next) => {
    console.log('title : ' + req.body.title);
    console.log('size : ' + req.body.size);
    res.redirect('/admin/add-product');
})

module.exports = router;