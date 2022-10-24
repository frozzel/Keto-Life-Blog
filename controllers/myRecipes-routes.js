const router = require('express').Router();
const { Recipes } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const recData = await Recipes.findAll({
      where: {
        userId: req.session.userId,
      },
    });

    const recipes = recData.map((recipe) => recipe.get({ plain: true }));

    res.render('all-recipes-admin', {
      layout: 'myRecipes',
      recipes,
    });
  } catch (err) {
    res.redirect('login');
  }
});

router.get('/new', withAuth, (req, res) => {
  res.render('new-recipe', {
    layout: 'myRecipes',
  });
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const recData = await Recipes.findByPk(req.params.id);

    if (recData) {
      const recipe = recData.get({ plain: true });

      res.render('edit-recipe', {
        layout: 'myRecipes',
        recipe,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;
