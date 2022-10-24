const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Recipes extends Model {}

Recipes.init(
  {
    title: { type: DataTypes.STRING},
    instructions:{ type: DataTypes.STRING},
    ingredients:{ type: DataTypes.STRING},
    image_Url: { type: DataTypes.STRING,
        validate: {
         isUrl: true
       },
   },
  },
  {
    sequelize,
    timestamps: true,
  }
);

module.exports = Recipes;