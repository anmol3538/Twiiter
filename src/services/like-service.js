const LikeRepository = require('../repository/like-repository')
const TweetRepository = require('../repository/tweet-repository')
class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async togglelike(modelid, modeltype, userid) {
        if(modeltype == 'Tweet') {
            var likeable = await this.tweetRepository.get(modelid).populate('likes');
        }
        else if(modeltype == 'Comment'){

        }
        else {
            throw new Error("unknown model type");
        }
        const exists = await this.likeRepository.findbyuserandlikeable({
            user: userid,
            likeable: modelid,
            onModel: modeltype
        })
        if(exists) {
            likeable.likes.pull(exists.id);
            await likeable.save();
            await exists.remove();
            var isadded = false;
        }
        else {
            const newlike = new this.likeRepository.model({
                user: userid,
                onModel: modeltype,
                likeable: modelid
            });
            likeable.likes.push(newlike);
            await likeable.save();
            var isadded = true;
        }
        return isadded;
    }
}

module.exports = LikeService;