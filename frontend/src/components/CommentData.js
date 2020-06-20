import React from 'react';

// Data that we're passing thru a property / object


const CommentData = ({ data }) => { 
  
    return ( 
      <div className={"comment"}>
        <h2> {data.username} </h2>
        <h3> {data.comment} </h3>
    </div>    
    )
  }


export default CommentData;