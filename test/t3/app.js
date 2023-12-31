const express = require("express");
const bodyParser = require("body-parser");
const routeIndex = require("./routes/indexRoute");
const routeProduct = require("./routes/productRoute");
const path = require("path");
const errorController = require('./controllers/errorController');
const app = express();

// template
app.set("view engine", "ejs");
app.set("views", "./views/ejs");

// middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: false }));

// route
app.use("/index", routeIndex);
app.use("/product", routeProduct);

app.get("/", (req, res) => {
  res.redirect("/index");
});
app.use(errorController.getError);

const port = 3000;
app.listen(port, () => {
  console.log(`* Listening to port ${port}`);
});
