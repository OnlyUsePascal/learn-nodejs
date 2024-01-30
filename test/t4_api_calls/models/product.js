const fileHandler = require('../utils/fileHandler');

// let productList = fileHandler.getData();

class Product {
  static productList = null;

  constructor(title) {
    this.title = title;
  }

  static getProducts(cb) {
    console.log("* get products");
    fileHandler.getData((data) => {
      this.productList = data;
      cb(data);
    });
  }
 
  static findProduct(id, cb) {
    console.log('* find product');
    if (this.productList != null) {
      cb(this.productList[id]);
    } else {
      this.getProducts(productList => {
        let product = productList[id];
        // console.log(product);
        cb(product);
      });
    }
  }
  
  static editProduct(id, newTitle){
    console.log('* edit product');
    this.findProduct(id, product => {
      product.title = newTitle;
      this.saveProduct();
    })
  }

  static saveProduct(){
    console.log('* save product');
    if (this.productList != null){
      fileHandler.writeData(this.productList);
    }
  }

  saveNewProduct() {
    // retrieve -> push -> write
    console.log('* add new product');
    Product.getProducts(productList => {
      productList.push(this);
      Product.saveProduct();
    });
  }
}

module.exports = Product;
