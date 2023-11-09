const Product = require('../models/product');

exports.getIndex = (req, res) => {
  Product.getProducts((productList) => {
    console.log(productList);
    res.render("index", {
      route: "index",
      pageTitle: "Shop",
      cssFile: null,
      productList: productList,
    });
  })
};