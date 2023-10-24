const express = require('express');
const path = require('path');

const bodyParser = require('body-parser');
const pathHandler = require('../utils/pathHandler');
const productHandler = require('../utils/productHandler');

const router = express.Router();

router.get('/', (req, res) => {
  // res.sendFile(path.join(pathHandler.pathViews, 'productAdd.html'));
  res.render('productAdd', {
    pageTitle : 'Add product', 
    route: 'product', 
    cssFile: 'form.css', 
    });
});

router.post('/', (req, res) => {
  let product = {title: req.body.title};
  productHandler.addProduct(product);
  res.redirect('/index');
})

module.exports = router;
