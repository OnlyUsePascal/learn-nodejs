const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const allProducts = require('./controllers/allProducts');
const addProduct = require('./controllers/addProduct');

// middlewear
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended : false}));

// template
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/allProducts', allProducts);
app.use('/addProduct', addProduct);

app.use((req, res) => {
  res.status(404).send('something went wrong :(');
});


let port = 3001;
app.listen(port, () => {
  console.log(`listening to port ${port}`);
})
