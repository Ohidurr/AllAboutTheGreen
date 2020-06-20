import React from 'react';



const PostSubmission = ({inquiryId, userName, imageurl, inquiryContent, inquiryDate}) => {

 


    return (
        <div> 
            <div title ={inquiryId} className="submission-card">    
                <div className="submission-main">
                    <div className="submission-sec">
                        <p> {inquiryDate} </p>
                        <img className="style-image" alt="" src={imageurl}/>
                        <p className="style-username"> User: {userName}</p>
                        <p className="style-text"> Thinking Out Loud:  {inquiryContent} </p>
                    </div>
                    
                </div>

            </div>
      
        </div>

    )
}

export default PostSubmission;