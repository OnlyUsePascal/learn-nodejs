const path = require('path');

const pathRoot = path.dirname(require.main.filename);
const pathViews = path.join(pathRoot, 'views');

const getView = (filename) => {
  return path.join(pathViews, filename);
}

module.exports = { pathRoot, pathViews, getView}