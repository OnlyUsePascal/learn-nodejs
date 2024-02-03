const { DataTypes } = require('sequelize');
const sequelize = require("../util/sequelizeUtil");

const ProductDao = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING, 
    allowNull: false,
    primaryKey: true,
  }, 
  img: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  timestamps: false
});



module.exports = ProductDao;

// const User = sequelize.define('User', {
//   // Model attributes are defined here
//   firstName: {
//     type: DataTypes.STRING,
//     allowNull: false
//   },
//   lastName: {
//     type: DataTypes.STRING
//     // allowNull defaults to true
//   }
// }, {
//   // Other model options go here
//   tableName: 'Users'
// });
// module.exports = User;