import React, { useState } from 'react';
import axios from 'axios';
import { useInput } from '../util/useInput';
import { apiURL } from '../util/apiURL';
import NavBar from './NavBar'
import '../css/submissions.css'
const Submissions = () => {

    const [file, setFile] = useState({preview: "", raw: ""});
    const setUsername = useInput("");
    const setDescription = useInput("");
    const API = apiURL();

    const onSelectImage = (e) => {
        if (e.target.files.length) {
            setFile({
              preview: URL.createObjectURL(e.target.files[0]),
              raw: e.target.files[0]
            });
          }
    }

    const handleNewSubmission = async (e) => {
        try {
            e.preventDefault();
            const formData = new FormData();
            formData.append("myImage", file.raw);
            formData.append("file", file.preview);
            formData.append("username", setUsername.value);
            formData.append("description", setDescription.value)
            const config = {
              headers: {
                "content-type": "multipart/form-data",
              },
            }
            let res = await axios.post(`${API}/plant-inquiries`, formData, config);
            console.log(res.data.post)
            alert(res.data.message)
            setTimeout(function() {
              window.location = "/open-forum";
            },1000) 
          } catch (err) {
            console.log(err)
          }
        }





    return (
        <div className="top-div-yeah">
        <div>
            <h1 className="submit-heading"> Submissions </h1>
            <h3 className="sub-heading-submit"> Submit your pictures for tips and tricks or just to inspire others around the world with your progress </h3>

        </div>
            <form className="submit-form" onSubmit={handleNewSubmission}>

              <div className="upload-submission-file">
                <div className="style-the-sel-btn">
                  <input className="input-style-img" type="file" name="myImage" accept="image/png/jpeg" onChange={onSelectImage} />
                </div>

                <div>
                  <img src="" alt="Preview" src={file.preview} className="image-preview__image-submission"/> 
                </div>
              </div>

              <div className="submit-user-info">
                <label> Username: </label>
                <input placeholder="Enter username" {...setUsername}/>
                <br/>
                <label> Note: </label>
                <textarea rows="5" cols="30" className="add-note-style" type="textarea" placeholder="Tell us what's going on..." {...setDescription}/> 
                <br/>
                <button className="style-submission-btn" type="submit"> Submit </button>
              </div>

              <div>
              </div>
            </form>
        </div>
    )

}  




export default Submissions;


