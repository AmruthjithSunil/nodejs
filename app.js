const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');

const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const contactRouter = require('./routes/contact');
const successRouter = require('./routes/success');
const errorRouter = require('./routes/404');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRouter);
app.use('/shop', shopRouter);
app.use('/contactus', contactRouter);
app.use('/success', successRouter);
app.use(errorRouter);

app.listen(4000);