import React from 'react';
// import DisplayComments from './Comments/DisplayComments'
import CreateComments from './Comments/CreateComments'



const PostSubmission = ({inquiryId, userName, imageurl, inquiryContent, inquiryDate}) => {

 


    return (
        <div> 
            <div title ={inquiryId} className="submission-card">    
                <div className="submission-main">
                    <div className="submission-sec">
                        <p> {inquiryDate} </p>
                        <img className="style-image" alt="" src={imageurl}/>
                        <p className="style-username"> Username: {userName}</p>
                        <p className="style-text"> Comment:  {inquiryContent} </p>
                    </div>

                    <CreateComments/>
                    
                </div>

            </div>
      
        </div>

    )
}

export default PostSubmission;