const Product = require("../../models/product");

const getDetail = (req, res, next) => {
  let pId = parseInt(req.params.id);
  Product.findProduct(pId, product => {
    res.render('shop/detail', {
      route: "index",
      pageTitle: "detail",
      cssFile: null,
      product: product,
    })
  })
}

module.exports = getDetail;