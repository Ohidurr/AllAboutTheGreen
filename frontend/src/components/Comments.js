import React, { useState, useEffect } from "react";
// import CommentData from "./CommentData";
import { useInput } from '../util/useInput';
import { apiURL } from '../util/apiURL';


// const Comments = () => {
  const setUsername = useInput("");
  const setComment = useInput("");
  const [allComments, setAllComments] = useState([]);
  const API = apiURL();
    // const setUsername = useInput("");
    // const setComment = useInput("");


    useEffect = (() => {
      const fetchAllCommentsByUpload = () => {
        try {
          let res = await axios({
            method: "get",
            url: `${API}/plant-inquiries/${plant-inquiries.id}/comments`
          })
          setAllComments(res.data.payload.allComments);
          console.log(res.data)
        } catch (err) {
          setAllComments([])
          console.log(err.message);
        }
      }
      fetchAllCommentsByUpload()
    }, [])

 



  const handleNewComment = async (e) => {
    try {
        e.preventDefault();
        const formData = new FormData();
        formData.append("upload_id", uploadId);
        formData.append("username", username.value);
        formData.append("user_comment", user_comment.value);
        debugger
        const config = {
          headers: {
            "content-type": "multipart/form-data",
          },
        }
        let newComment = await axios.post(`${API}/api/pins/`, formData, config);
        console.log(newComment.data)
        alert(newComment.data.message)
        setTimeout(function() {
          window.location = "/submissions";
        },1000) 
      } catch (err) {
        console.log(err)
      }
    }

    const displayComments = allComments.map(userCom => {
      return (
        <PostComment key={userCom.id} commentId={userCom.id} uploadId={userCom.upload_id} userName={userCom.username} singleComment={userCom.user_comment}/>
      )
    })

  return (
    <div className="commentDiv">
      <div className="commentSectionDiv">
        <h3 className="commentHeading">Comment Section </h3>
      </div>
      <div className="formDiv">



        <form onSubmit={handleNewComment}>
          <div className="about-div"> 
            <label className="username-label" for="name"> Username: </label>
              <text className="add-username-style" type="text" placeholder="Enter a username" {...setUsername}/> 
          </div>
          <div className="about-div"> 
            <label className="commentLabel" for="name"> Username: </label>
              <textarea rows="5" cols="30" className="add-comment-style" type="textarea" placeholder="Tell everyone what your Pin is about" {...setComment}/> 
          </div>
          <br />
        
          <div className="buttonDiv">
            <button className="commentButton" type="submit" value="Add comment">
              Submit Inquiry
            </button>
          </div>
        </form>
        <div>
          


          
        </div>
      </div>
    </div>
  );
// };

// export default Comments;
