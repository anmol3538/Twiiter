const HashtagRepository = require('../repository/hashtag-repository');
const { TweetRepository } = require('../repository/index');

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hastagRepository = new HashtagRepository();
    }

    async create(data) {
        console.log(data);
        const content = data.content;
        let tags = content.match(/#[a-zA-Z0-9_]+/g);
        tags = tags ? tags.map(tag => tag.substring(1)) : [];

        const tweet = await this.tweetRepository.createTweet(data);
        console.log(tweet);

        let alreadypresenttags = await this.hastagRepository.getbyname(tags);
        const existingTagTitles = alreadypresenttags.map(tag => tag.title);

        let newtags = tags.filter(tag => !existingTagTitles.includes(tag));
        newtags = newtags.map(tag => ({ title: tag, tweets: [tweet._id] }));

        if (newtags.length > 0) {
            await this.hastagRepository.bulkcreate(newtags);
        }

        alreadypresenttags.forEach(async (tag) => {
            if (!tag.tweets) {
                tag.tweets = [];
            }
            console.log("Updating tag:", tag.title);
            tag.tweets.push(tweet._id);
            await tag.save();
        });

        return tweet;
    }

    async get(tweetid) {
        const tweet = await this.tweetRepository.getwithcomments(tweetid);
        return tweet;
    }
}

module.exports = TweetService;
