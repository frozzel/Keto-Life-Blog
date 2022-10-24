const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const myArticlesRoutes = require('./myArticles-routes.js');
const myRecipesRoutes = require('./myRecipes-routes.js');

router.use('/', homeRoutes);
router.use('/Articles', myArticlesRoutes);
router.use('/Recipes', myRecipesRoutes);
router.use('/api', apiRoutes)

module.exports = router;
