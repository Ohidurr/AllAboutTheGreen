const comments = require("../../node_modules/express").Router();


const {
    getAllComments, 
    createNewComment,
} = require("../../queries/comments")


comments.get('/', getAllComments)
comments.post('/', createNewComment);


module.exports = comments;