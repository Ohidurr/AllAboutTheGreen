import React, { useState } from "react";
import CommentData from "./CommentData";
import { useInput } from '../util/useInput';
import { apiURL } from '../util/apiURL';


const Comments = () => {
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

    // const API = apiURL();
    // const setUsername = useInput("");
    // const setComment = useInput("");
    const [allComments, setAllComments] = useState([]);;

  const handleSubmit = e => {
    e.preventDefault();
    let enteredComment = { username: username, comment: comment };
    // Add and Update enteredComment to allComments (Array)
    // Update with Spread [...arr]
    let allCommentsCopy = [...allComments, enteredComment];
    setAllComments(allCommentsCopy);
    // Empty state for name and comment for the next comment
    setUsername("");
    setComment("");
    // console.log(allComments)
    // console.log([allCommentsCopy])
  };


  // const handleNewComment = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append("username", setUsername.value);
  //   formData.append("comment", setComment.value);
  //   debugger
  //   const config = {
  //       headers: {
  //           "content-type": "multipart/form-data",
  //         },
  //   }
  //   let res = await axios.post(`${API}/uploads/:id/comments`, formData, config);
  //   console.log(res.data)
  //   alert(res.message)
  // }

  return (
    <div className="commentDiv">
      <div className="commentSectionDiv">
        <h1 className="commentHeading">Comment Section </h1>
      </div>
      <div className="formDiv">
        <form onSubmit={handleSubmit}>
          <label className="commentLabel" for="name">
            Username:
          </label>
          <br />
          {/* for connects to the id of the input field, best when it's all seperate like so */}
          <input
            id="name"
            value={username}
            onChange={e => setUsername(e.target.value)}
            className="commentInput"
            type="text"
            placeholder="Name"
            required
          />
          <br />
          <label className="commentLabel" for="comment">
            Comment:
          </label>
          <br />
          <input
            id="comment"
            value={comment}
            onChange={e => setComment(e.target.value)}
            className="commentInput"
            type="text"
            placeholder="Comment"
            required
          />
          <br />
          <div className="buttonDiv">
            <button className="commentButton" type="submit" value="Add comment">
              Submit
            </button>
          </div>
        </form>
        <div>
          {/* building  */}
          {/* passing object as newData everytime it's mapped thru */}
          {allComments.map(newData => {
            return <CommentData data={newData} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Comments;
