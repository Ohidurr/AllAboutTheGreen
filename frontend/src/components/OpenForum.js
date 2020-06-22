import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { apiURL } from '../util/apiURL'
import PostSubmission from './PostSubmission'
import '../css/open-forum.css'
import NavBar from './NavBar'

const OpenForum = () => {
    const API = apiURL();
    const [inquiries, setInquiries] = useState([]);


    useEffect(() => {
        const fetchAllInquiries = async () => {
            try {
                debugger
                let res = await axios({
                    method: "get",
                    url: `${API}/plant-inquiries`,
                    
                })
                setInquiries(res.data.payload.allPlantUploads);
                console.log(res.data)
            } catch(err) {
                setInquiries([])
                console.log(err.message);
                }
            };
            fetchAllInquiries();
    }, [])

    const displaySubmission = inquiries.map(inquiry => {
        return ( 
        <PostSubmission key={inquiry.id} inquiryId={inquiry.id} userName={inquiry.username} imageurl={API+inquiry.plant_image} inquiryContent={inquiry.description_text} inquiryDate={inquiry.created_date}/> 
        
        )
    })
    



    return (
       
        <div className="mainCard">
       
            <h2 className="heading-div">Community Forum</h2>
            <NavBar/>
            <div className="min-cards"> 
            {displaySubmission}
            </div>
        </div>
    )
}

export default OpenForum

  