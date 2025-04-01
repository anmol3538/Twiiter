const express = require('express');
const router = express.Router();
const { createTweet, gettweet } = require('../../controllers/tweet-controller')
const {togglelike} = require('../../controllers/like-controller');
const {createcomment} = require('../../controllers/comment-controller')
router.post('/tweets', createTweet)
router.post('/likes/toggle', togglelike)
router.post('/comments', createcomment)
router.get('/tweets/:id', gettweet)
module.exports = router;