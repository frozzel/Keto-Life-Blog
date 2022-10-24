const router = require('express').Router();
const { Articles } = require('../models/');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
    const artData = await Articles.findAll({
      where: {
        userId: req.session.userId,
      },
    });

    const articles = artData.map((article) => article.get({ plain: true }));

    res.render('all-artciles-admin', {
      layout: 'myArticles',
      articles,
    });
  } catch (err) {
    res.redirect('login');
  }
});

router.get('/new', withAuth, (req, res) => {
  res.render('new-article', {
    layout: 'myArticles',
  });
});

router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const artData = await Articles.findByPk(req.params.id);

    if (artData) {
      const article = artData.get({ plain: true });

      res.render('edit-article', {
        layout: 'myArticles',
        article,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;
