const router = require('express').Router();
const { Post, User } = require('../models/');
const withAuth = require('../utils/auth');

// ALL POSTS DASHBOARD
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where:{"userId": req.session.userId},
      include: [User]
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    // Renders all post
    res.render('all-posts', {
      layout: 'dashboard',
      posts,
    });
  } catch (err) {
    res.redirect('login');
  }
});

// Renders new page when you click on create.
router.get('/new', withAuth, (req, res) => {
  // renders new-post page to create new post
  res.render('new-post', {
    // using dashboard layout
    layout: 'dashboard',
  });
});

// Route to edit post
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id);
    if (postData) {
      const post = postData.get({ plain: true });
      // renders edit-post page
      res.render('edit-post', {
        layout: 'dashboard',
        post,
      });
    } else {
      res.status(404).end();
    }
  } catch (err) {
    res.redirect('login');
  }
});

module.exports = router;