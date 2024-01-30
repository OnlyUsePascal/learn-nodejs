const express = require("express");
const bodyParser = require("body-parser");
const routeShop = require("./routes/shopRoute");
const routeAdmin = require("./routes/adminRoute");
const path = require("path");
const errorController = require('./controllers/errorController');
const app = express();
const Product = require("./models/product");

// template
app.set("view engine", "ejs");
app.set("views", "./views");

// middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

// route
app.use("/shop", routeShop);
app.use("/admin", routeAdmin);

app.get("/", (req, res) => {
  res.redirect("/shop/index");
});
app.use(errorController.getError);

const port = 3001;
app.listen(port, () => {
  console.log(`* Listening to port ${port}`);
});
