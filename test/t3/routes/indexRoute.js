const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const pathHandler = require("../utils/pathHandler");
const indexController = require('../controllers/indexController');
const router = express.Router();

router.get("/", indexController.getIndex);

module.exports = router;
