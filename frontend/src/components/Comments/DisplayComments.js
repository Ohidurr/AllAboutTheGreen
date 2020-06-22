import React, { useState, useEffect } from 'react';
import PostComment from '../Comments/PostComment';
import axios from 'axios';
import { apiURL } from '../../util/apiURL'




const DisplayComments = ({id}) => {
    const API = apiURL();
    const [showComments, setShowComments] = useState([]);

    useEffect(() => {
        const grabAllComments = async () => {

            debugger
            try {
                let res = await axios({
                    method: "GET",
                    url: `${API}/plant-inquiries/${id}/comments`
                })
                setShowComments(res)
                console.log(res.data)
            } catch (err) {
                setShowComments([])
                console.log(err)
            }
        }
        grabAllComments();
    }, [])


    const displayNewComment = showComments.map(userComments => {
        return (
            <PostComment key={userComments.id} commentId={userComments.id} id={userComments.upload_id} userName={userComments.username} singleComment={userComments.user_comment}/>
        )
    })


    return (
        <div>
            <div>
              {displayNewComment}
            </div>
        </div>

    )

}

export default DisplayComments;