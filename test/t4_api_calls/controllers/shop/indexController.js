const Product = require('../../models/product');

const getIndex = (req, res) => {
  Product.getProducts((productList) => {
    console.log(productList);
    res.render("shop/index", {
      route: "index",
      pageTitle: "Shop",
      cssFile: null,
      productList: productList,
    });
  })
};

module.exports = getIndex;