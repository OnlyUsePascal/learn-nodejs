const express = require('express');
const bodyParser = require('body-parser');
const routeIndex = require('./routes/index');
const routeProduct = require('./routes/product');
const path = require('path');
// const {engine: handlebarsEngine, ExpressHandlebars} = require('express-handlebars');
const app = express(); 

// template
app.set('view engine', 'ejs');
app.set('views', './views/ejs');

// middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended : false}));

// route
app.use('/index', routeIndex);
app.use('/product', routeProduct);

app.get('/', (req, res) => {
  res.redirect('/index');
});

app.use((req, res) => {
  res.status(404)
      .render('error', {pageTitle : 'Uh oh...'});
})

const port = 3000;
app.listen(port, () => {
  console.log(`* Listening to port ${port}`);
})