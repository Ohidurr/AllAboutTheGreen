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
        // console.log(req)
        // console.log(req.body)
        // console.log(req.params)
        const { upload_id, username, user_comment } = req.body
        console.log(upload_id, username, user_comment)
        console.log(req.body)
        // let { upload_id } = req.params
        let newComment = await db.one(
            `INSERT INTO Comments(upload_id, username, user_comment) VALUES($1, $2, $3) RETURNING *`,
            [upload_id, username, user_comment]
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