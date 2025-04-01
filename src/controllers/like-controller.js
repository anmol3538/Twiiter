const LikeService = require('../services/like-service')

const likeservice = new LikeService();

const togglelike = async (req, res) => {
    try {
        const response = await likeservice.togglelike(req.query.modelid, req.query.modeltype, req.body.userid);
        return res.status(200).json({
            success: true,
            data: response,
            err: {},
            message: 'Like toggled successfully'
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: 'Error toggling like',
            data: {},
            err: error
        })
    }
}

module.exports = {
    togglelike
}