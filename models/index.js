const User = require('./User');
const Articles = require('./Articles');
const Comments = require('./Comments');
const Recipes = require('./Recipes');

Articles.belongsTo(User, {foreignKey: 'userId', onDelete: 'CASCADE'});
Articles.hasMany(Comments, {foreignKey: 'articlesId', onDelete: 'CASCADE'});
Recipes.belongsTo(User, {foreignKey: 'userId', onDelete: 'CASCADE'});
Recipes.hasMany(Comments, {foreignKey: 'recipesId', onDelete: 'CASCADE'});
Comments.belongsTo(User, {foreignKey: 'userId', onDelete: 'CASCADE'});

module.exports={User, Comments, Articles};