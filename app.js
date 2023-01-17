const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><input type="text" name="size"><button type="submit">send</button></form>');
})

app.post('/product', (req, res, next) => {
    console.log('title : ' + req.body.title);
    console.log('size : ' + req.body.size);
    res.redirect('/add-product');
})

app.listen(4000);