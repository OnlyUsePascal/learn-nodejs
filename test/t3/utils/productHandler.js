let productList = [];
productList.push({title: 'send nude'});
function checkProduct() {
  console.log('* product check', productList);
}

function addProduct(product){
  console.log('* add product', product);
  productList.push(product);
}

function getProducts(){
  console.log('* get products');
  return productList;
}

module.exports = {checkProduct, addProduct, getProducts};