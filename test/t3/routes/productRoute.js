const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pathHandler = require('../utils/pathHandler');
const productController = require('../controllers/productController');

const router = express.Router();

router.get('/', productController.getAddProduct);

router.post('/', productController.postAddProduct);

module.exports = router;
