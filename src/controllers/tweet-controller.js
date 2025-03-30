const TweetService = require('../services/tweet-service');
const tweetservice = new TweetService();
const createTweet = async (req, res) => {
    try {
        console.log(req.body);
        const response = await tweetservice.create(req.body);
        return res.status(200).json({
            success: true,
            message: "successfully created a tweet",
            data: response,
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            success: false,
            message: "Failed to create a tweet",
            data: [],
            err: error
        })
    }
}

module.exports = {
    createTweet
}