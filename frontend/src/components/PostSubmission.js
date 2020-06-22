import React from 'react';
// import DisplayComments from './Comments/DisplayComments'
import DisplayComments from './Comments/DisplayComments';
import CreateComments from './Comments/CreateComments';
import '../css/postsubmission.css'



const PostSubmission = ({inquiryId, userName, imageurl, inquiryContent, inquiryDate}) => {

 


    return (
        <div> 
            <div title ={inquiryId} className="submission-card">    
                <div className="submission-main">
                    <div className="submission-sec">
                        <p> {inquiryDate} </p>
                        <img className="style-image" alt="" src={imageurl}/>
                        <div className="inquiry-info">
                            <label className="style-label-1"> Username: </label>
                            <p className="style-username"> {userName}</p>
                            <br/>
                            <label className="style-label-2"> Note: </label>
                        <p className="style-text"> {inquiryContent} </p>

                        </div>
                    </div>

                <div className="all-about-comments-div">
                    <div className="create-comment-div">
                        <CreateComments uploadId={inquiryId}/>
                    </div>
                    <div className="display-comment-div">
                        <DisplayComments uploadId={inquiryId} />
                    </div>
                </div> 
                    
                </div>

            </div>
      
        </div>

    )
}

export default PostSubmission;