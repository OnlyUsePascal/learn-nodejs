const path = require("path");
const fs = require("fs");
const pathHandler = require("./pathHandler");

let dataPath = path.join(pathHandler.pathRoot, "data", "product.json");

function getData(cb){
  fs.readFile(dataPath, (err, data) => {
    if (err) throw err;
    cb(JSON.parse(data));
  })
};

function writeData(data){
  fs.writeFile(dataPath, JSON.stringify(data), (err) => {
    if (err) throw err;
  });
}

module.exports = {getData, writeData}; 