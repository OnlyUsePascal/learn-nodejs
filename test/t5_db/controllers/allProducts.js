const ProductDao = require('../model/productDao');
const db = require('../util/sqlUtil');

const allProducts = (req, res, next) => {
  ProductDao.findAll().then(results => {
    res.render('index', {products: results});
  }).catch(err => {
    console.log(err);
  })
  
  // SQL BASE
  // db.query('select * from Products')
  //   .then(([results, fields]) => {
  //     // console.log(results);
  //     // console.log(fields);
  //     res.render('index', {products: results});
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
};

module.exports = allProducts;