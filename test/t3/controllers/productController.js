const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  res.render('productAdd', {
    pageTitle : 'Add product', 
    route: 'product', 
    cssFile: 'form.css', 
    });
};

exports.postAddProduct = (req, res, next) => {
  let product = new Product(req.body.title);
  product.saveProduct();
  res.redirect('/index');
};