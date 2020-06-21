import React, { useState, useEffect } from "react";
import PostComment from '../Comments/PostComment'
// import CommentData from "./CommentData";
import { useInput } from '../../util/useInput';
import { apiURL } from '../../util/apiURL';
import axios from 'axios';



const CreateComments = () => {
    const API = apiURL();
    const [uploadId, setUploadId] = useState("");
    const commentUsername = useInput("");
    const commentUsertext = useInput("");
    const grabUploadId = useInput("")
    const [allComments, setAllComments] = ([])


    useEffect(() => {
        const getUploads = async () => {
            try {
                let res = await axios({
                    method: "get",
                    url: `${API}/plant-inquiries/`,
                })
                setUploadId(res.data.payload.allPlantUploads[0].id)
            } catch (err) {
                console.log(err.message);
            }
        };
        getUploads(); 
    }, [])

    const handleNewComments = async (e) => {
        try {
            e.preventDefault();
            const formData = new FormData();
            formData.append("username", commentUsername.value);
            formData.append("user_comment", commentUsertext.value);
            formData.append("upload_id", uploadId);
            debugger
const config = {
    headers: {
        "content-type": "multipart/form-data",
    },
}       
            debugger
            let newComment = await axios.post(`${API}/comments`, formData, config)
            console.log(newComment.data)
            alert("Your comment was successfully created.")
            setTimeout(function() {
                window.location = "/open-forum";
            },1000) 
        } catch (err) {
            alert(err)
        }
    }
    // const displayNewComment = allComments.map(userComments => {
    //     return (
    //         <PostComment key={userComments.id} commentId={userComments.id} uploadId={userComments.upload_id} userName={userComments.username} singleComment={userComments.user_comment}/>
    //     )
    // })



    return (
        <div className="commentDiv">
          <div className="commentSectionDiv">
            <h1 className="commentHeading">Comment Section </h1>
          </div>
          <div className="formDiv">
            <form onSubmit={handleNewComments}>


              <div className="about-div"> 
                <label className="username-label" for="name"> Post Id: </label>
                  <input className="add-username-style" type="text" placeholder="Enter id" {...grabUploadId}/> 
              </div>


              <div className="about-div"> 
                <label className="username-label" for="name"> Username: </label>
                  <input className="add-username-style" type="text" placeholder="Enter a username" {...commentUsername}/> 
              </div>
              <br/>
              <div className="about-div"> 
                <label className="commentLabel" for="name"> Comment: </label>
                  <textarea rows="3" cols="90" className="add-comment-style" type="textarea" placeholder="Feedback welcomed..." {...commentUsertext}/> 
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
            {/* <div>
                {displayNewComment}
            </div> */}
          </div>
        </div>
      );



}

export default CreateComments