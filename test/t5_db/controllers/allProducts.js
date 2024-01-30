const db = require('../util/sqlUtil');

const allProducts = (req, res, next) => {
  console.log('* all product');
  // res.send('all products');
  db.query('select * from Products')
    .then(([results, fields]) => {
      console.log(results);
      console.log(fields);
      res.render('index', {products: results});
    })
    .catch(err => {
      console.log(err);
    });
};

module.exports = allProducts;