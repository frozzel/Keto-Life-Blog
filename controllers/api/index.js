const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const commentRoutes = require('./comment-routes');
const articlesRoutes = require('./articles-routes');
const recipesRoutes = require('./recipes-routes');

router.use('/user', userRoutes);
router.use('/comment', commentRoutes);
router.use('/articles', articlesRoutes);
router.use('/recipes', recipesRoutes);

module.exports = router;
