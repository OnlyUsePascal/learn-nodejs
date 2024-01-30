const Product = require('../../models/product');

exports.getProductEdit = (req, res, next) => {
  let pId = parseInt(req.params.id);
  Product.findProduct(pId, product => {
    res.render("admin/productEdit", {
      pageTitle : 'Edit product', 
      route: 'productEdit', 
      cssFile: 'form.css', 
      product: product,
      pId: pId
    });
  });
};

exports.postProductEdit = (req, res, next) => {
  let id = parseInt(req.params.id);
  let newTitle = req.body.title;
  
  Product.editProduct(id, newTitle);
  res.redirect('/shop/index');
};

