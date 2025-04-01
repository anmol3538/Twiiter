const Tweet = require('../models/tweet')
const CrudRepository = require('./crud-repository')
class TweetRepository extends CrudRepository {

    constructor() {
        super(Tweet);
    }
    async createTweet(tweet) {
        try {
            const data = await Tweet.create(tweet);
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async getwithcomments(id) {
        try {
            const tweet = await Tweet.findById(id).populate({path : 'comment'});
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

    async find(id) {
        try {
            const tweet = await Tweet.findById(id).populate({path: 'likes'});
            return tweet;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TweetRepository