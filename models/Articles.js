const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Articles extends Model {}

Articles.init(
  {
    title: { type: DataTypes.STRING},
    body: { type: DataTypes.STRING},
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

module.exports = Articles;