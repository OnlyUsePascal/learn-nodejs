const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const pathHandler = require("../utils/pathHandler");
const shopController = require('../controllers/shop/shopController');
const router = express.Router();

router.get("/index", shopController.getIndex);
router.get("/checkout", shopController.getCheckout);
router.get('/product/:id', shopController.getDetail);

module.exports = router; 