import React from 'react';
// import '../../css/postcomment.css'


const PostComment = ({commentId, uploadId, userName, userComment}) => {


    return (
        <div title={commentId} className="title-style">
            <div> 
                <p className="uplaod-id-style"> Post Id: {uploadId}</p>
                <p className="style-username"> Username: {userName}</p>
                <p className="style-text"> Comment:  {userComment} </p>
                    
            
            </div>
        </div>
    )
}

export default PostComment; 