const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Articles extends Model {}

Articles.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    image_Url: DataTypes.STRING
  },
  {
    sequelize
  }
);

module.exports = Articles;