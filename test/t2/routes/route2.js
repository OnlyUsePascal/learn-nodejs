const express = require('express');

const route = express.Router();

route.get('/', (req, res) => {
  res.send('this is route2');
});

module.exports = route;