const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pathHandler = require('../utils/pathHandler');
const productAddController = require('../controllers/admin/productAddController');
const productEditController = require('../controllers/admin/productEditController');
const repoController = require('../controllers/admin/repoController');

const router = express.Router();

router.get('/productAdd', productAddController.getAddProduct);
router.post('/productAdd', productAddController.postAddProduct);
router.get('/repo', repoController.getRepo);
router.get('/productEdit/:id', productEditController.getProductEdit);
router.post('/productEdit/:id', productEditController.postProductEdit);
module.exports = router;
