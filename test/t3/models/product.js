const fileHandler = require('../utils/fileHandler');

// let productList = fileHandler.getData();

class Product {
  constructor(title) {
    this.title = title;
  }

  static getProducts(cb) {
    fileHandler.getData((data) => {
      console.log("* get products");
      cb(data);
    })
  }
 
  saveProduct() {
    // retrieve -> push -> write
    Product.getProducts(productList => {
      console.log('* save product');
      productList.push(this);
      fileHandler.writeData(productList);
    });
  } 
}

module.exports = Product;
