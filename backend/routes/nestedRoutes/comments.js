const plants = require("express").Router({ mergeParams: true});


const { 
    getCommentsByUpload,
    deleteComment
} = require("../../queries/plants");



plants.get("/", getCommentsByUpload);
plants.delete("/:id/comments/:comment_id", deleteComment);





// module.exports = uploadComments;