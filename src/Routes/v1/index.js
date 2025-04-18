const express = require('express');
const router = express.Router();
const { createTweet, gettweet } = require('../../controllers/tweet-controller')
const {signup, login} = require('../../controllers/auth-controller')
const {togglelike} = require('../../controllers/like-controller');
const {createcomment} = require('../../controllers/comment-controller')
const {authenticate} = require('../../middlewares/authenticate')
router.post('/signup', signup)
router.post('/tweets', authenticate, createTweet)
router.post('/likes/toggle', togglelike)
router.post('/comments', createcomment)
router.get('/tweets', gettweet)
router.get('/login', login)
module.exports = router;