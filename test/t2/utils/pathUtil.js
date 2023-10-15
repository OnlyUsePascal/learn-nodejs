const path = require('path');

const pathRoot = path.dirname(require.main.filename); 
const pathView = path.join(pathRoot, 'views');

const getView = (filename) => {
  return path.join(pathView, filename);
}

module.exports = {pathRoot, 
                pathView, 
                getView};