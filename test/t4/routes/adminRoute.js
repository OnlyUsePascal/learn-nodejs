const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const pathHandler = require('../utils/pathHandler');
const productController = require('../controllers/admin/productAddController');
const repoController = require('../controllers/admin/repoController');

const router = express.Router();

router.get('/productAdd', productController.getAddProduct);
router.post('/productAdd', productController.postAddProduct);
router.get('/repo', repoController.getRepo);


module.exports = router;
