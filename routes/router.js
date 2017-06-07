var express = require('express');
    router = express.Router();

var index = require('../app/controllers/index'),
    support = require('../app/controllers/support'),
    tweets = require('../app/controllers/tweets'),
    users = require('../app/controllers/users'),
    articles = require('../app/controllers/articles');

router.get('/',index.home);
router.get('/about',index.about);
router.get('/signin',users.signin);
router.get('/signup',users.signup);
router.post('/signin',users.post.signin);
router.post('/signup',users.post.signup);

router.get('/articles',articles.index);
router.get('/articles/write',articles.write);
router.post('/articles/write',articles.enter);
router.get('/articles/:aid',articles.show);



router.get('/support',support.index);

router.get('/tweets',tweets.list);
router.post('/tweets/:tid/thumb_up:',tweets.thumbs_up);
router.post('/tweets/:tid/comments',tweets.comments);

module.exports = router;