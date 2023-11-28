const Product = require("../../models/product");

exports.getRepo = (req, res, next) => {
  Product.getProducts(productList => {
    res.render('admin/repo', {
      pageTitle : 'Repo', 
      route: 'repo', 
      cssFile: '',
      productList : productList
    });
  })
}