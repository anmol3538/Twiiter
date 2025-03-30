const Hashtag = require('../models/hashtags')

class HashtagRepository {

    constructor() {

    }
    async createTweet(tweet) {
        try {
            const data = await Hashtag.create(tweet);
            return data;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    async bulkcreate(data) {
        try {
            const tags = await Hashtag.insertMany(data);
            return tags;
        } catch (error) {
            console.log(error);
        }
    }

    async readTweet(id) {
        try {
            const tag = await Hashtag.findById(id);
            return tag;
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

    async getbyname(data) {
        try {
            const tags = await Hashtag.find({
                title: data
            })
            return tags;
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = HashtagRepository