const uploadComments = require("express").Router({ mergeParams: true});


const { 
    getCommentsByUpload,
    deleteComment
} = require("../../queries/plants");



uploadComments.get("/:id/comments", getCommentsByUpload);
uploadComments.delete("/:id/comments/:comment_id", deleteComment);





module.exports = uploadComments;