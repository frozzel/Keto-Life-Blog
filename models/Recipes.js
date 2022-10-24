const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Recipes extends Model {}

Recipes.init(
  {
    title: DataTypes.STRING,
    instructions: DataTypes.STRING,
    ingredients: DataTypes.STRING,
    image_Url: DataTypes.STRING
  },
  {
    sequelize
  }
);

module.exports = Recipes;