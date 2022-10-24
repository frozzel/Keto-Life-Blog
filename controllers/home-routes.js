const router = require('express').Router();
const { Articles, Recipes, Comment, User } = require('../models/');

// get all arcticles for homepage
router.get('/', async (req, res) => {
  try {
    const artData = await Articles.findAll({
      include: [User],
    });

    const articles = artData.map((article) => article.get({ plain: true }));

    res.render('all-posts', { articles });
  } catch (err) {
    res.status(500).json(err);
  }
});

// get single article
router.get('/articles/:id', async (req, res) => {
  try {
    const artData = await Articles.findByPk(req.params.id, {
      include: [
        User,
        {
          model: Comment,
          include: [User],
        },
      ],
    });

    if (artData) {
      const article = artData.get({ plain: true });

      res.render('single-article', { article });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

// get all recipes for homepage
// router.get('/', async (req, res) => {
//     try {
//       const recData = await Recipes.findAll({
//         include: [User],
//       });
  
//       const recipes = recData.map((recipe) => recipe.get({ plain: true }));
  
//       res.render('all-posts', { recipes });
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });
  
  // get single recipe
//   router.get('/recipes/:id', async (req, res) => {
//     try {
//       const recData = await Recipes.findByPk(req.params.id, {
//         include: [
//           User,
//           {
//             model: Comment,
//             include: [User],
//           },
//         ],
//       });
  
//       if (recData) {
//         const recipe = recData.get({ plain: true });
  
//         res.render('single-recipe', { recipe });
//       } else {
//         res.status(404).end();
//       }
//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });


module.exports = router;