const db = require('../util/sqlUtil');
const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  // res.send('add product');
  res.render('form');
});

router.post('/', (req, res, next) => {
  // let name = req.body.name ? req.body.name : '__blank';
  // let img = req.body.img ? req.body.img : '__blank';
  // console.log(name, img);
  db.query(`insert into Products values ("${name}", "${img}");`)
    .then(([result, field]) => {
      res.redirect('/allProducts');
    }).catch(err => {
      console.log(err);
      res.redirect('/allProducts');
    })
})

module.exports = router;