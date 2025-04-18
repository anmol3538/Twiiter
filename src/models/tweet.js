const mongoose = require('mongoose');

const tweetschema = new mongoose.Schema({
    content : {
        type: String,
        required: true,
        max: [250,'Tweet cannot be more than 250 characters.']
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Like'
        }
    ],
    comment: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ],
}, {timestamps: true}) 
const Tweet = mongoose.model('Tweet', tweetschema);
module.exports = Tweet;