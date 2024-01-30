const getCheckout = (req, res) => {
  res.render("shop/checkout", {
    route: "checkout",
    pageTitle: "Shop",
    cssFile: null,
    // productList: productList,
  });
};

module.exports = getCheckout;
