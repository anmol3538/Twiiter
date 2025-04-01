const CommentRepository = require('../repository/comment-repository')
const TweetRepository = require('../repository/tweet-repository');
class CommentService {
    constructor () {
        this.commentrepo = new CommentRepository();
        this.tweetrepo = new TweetRepository();
    }

    async createcomment (modelid, modeltype, userid) {
        if(modeltype == 'Tweet') {
            var likeable = await this.tweetrepo.get(modelid);
        }
        else if(modeltype == 'Comment'){
            var likeable = await this.commentrepo.get(modelid);
        }
        else {
            throw new Error('unknown model type');
        }
        const comment = await this.commentrepo.create({
            content : content,
            userid : userid,
            onModel : modeltype,
            commentable: modelid,
            comments : []
        })
        commentable.comments.push(comment);
        await commentable.save();
        return comment;
    }
}

module.exports = CommentService

