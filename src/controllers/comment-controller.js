const CommentService = require('../services/comment-service');
const commentservice = new CommentService();
const createcomment = async (req, res) => {
    try {
        console.log(req.body);
        const response = await commentservice.create(req.query.modeltype, req.query.modelid, req.bidy.userid, req.body.content);
        return res.status(200).json({
            success: true,
            message: "successfully created a comment",
            data: response,
            err : {}
        })
    } catch (error) {
        console.log(error);
        return res.status(501).json({
            success: false,
            message: "Failed to create a comment",
            data: [],
            err: error
        })
    }
}

module.exports = {
    createcomment
}