const db = require('../db/index');


const getAllComments = async (req, res, next) => {
    try {
      let allComments = await db.any('SELECT * FROM Comments');
      res.status(200).json({
          status: "Success",
          message: "All comments are now showing",
          payload: [allComments]
      })
  } catch(err) {
      res.status(400).json({
          status: "Error",
          message: "Sorry, no comments can be displayed at this moment. Try again later."
      })
      next(err)
  }
    
  }
  
  
  const createNewComment = async (req, res, next) => {
    try {
        let newComment = await db.one(
            "INSERT INTO Comments (id, upload_id, username, user_comment) VALUES(${id}, ${upload_id}, ${username}, ${user_comment}) RETURNING *",
            req.body
        );
        res.status(200).json({
            message: "Congrats. Your user comment has been created.",
            payload: newComment
        });
    } catch(err) {
        res.status(400).json({
            status: "Error",
            message: "Yikes, comment could not be created at this time."
        })
        next(err);
    }
  
  } 



module.exports = { getAllComments, createNewComment }