const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const pathHandler = require('../utils/pathHandler');
const productHandler = require('../utils/productHandler');

const router = express.Router();

router.get('/', (req, res) => {
  productHandler.checkProduct();

  // casual 
  // res.sendFile(pathHandler.getView('index.html'));

  // template
  let productList = productHandler.getProducts();
  // productList = [];
  res.render('index', { 
    route: 'index',
    pageTitle: 'Shop', 
    cssFile : null,
    productList: productList, 
  });
});

module.exports = router;
