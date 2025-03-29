const Tweet = require('../models/tweet')

class TweetRepository {

    constructor() {

    }
    async createTweet(tweet) {
        try {
            const data = (await Tweet.create(tweet)).populate({path: 'comment'});
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async readTweet(id) {
        try {
            const data = await Tweet.findById(id).populate({path:'comments'});
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async deleteTweet(tweet){
        try {
            const tweet = await Tweet.findByIdAndDelete(id);
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getAll(offset, limit){
        try {
            const tweet = await Tweet.find().skip(offset).limit(limit);
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TweetRepository