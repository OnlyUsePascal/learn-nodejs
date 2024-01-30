const Product = require('../../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('admin/productAdd', {
    pageTitle : 'Add product', 
    route: 'productAdd', 
    cssFile: 'form.css', 
    });
};

exports.postAddProduct = (req, res, next) => {
  console.log(req.body);
  let product = new Product(req.body.title);
  product.saveNewProduct();
  res.redirect('/');
};
