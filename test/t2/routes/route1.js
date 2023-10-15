const express = require('express');
const route = express.Router();
const path = require('path');
const pathUtil = require('../utils/pathUtil');

route.get('/', (req, res) => {
  // res.sendFile(path.join(__dirname, '..', 'views', 'route1.html'));
  res.sendFile(pathUtil.getView('route1.html'));
});

module.exports = route;