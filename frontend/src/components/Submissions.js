import React, { useState } from 'react';
import axios from 'axios';
import { useInput } from '../util/useInput';
import { apiURL } from '../util/apiURL';

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
        <div>
            Submit your plant pictures for tips, advice or just to show off...
            <form onSubmit={handleNewSubmission}>
                <button type="submit"> Submit </button>
                <input className="input-style-in" type="file" name="myImage" accept="image/png/jpeg" onChange={onSelectImage} />
                <img src="" alt="Preview" src={file.preview} className="image-preview__image"/> 
                <input placeholder="Enter username" {...setUsername}/>
                <textarea rows="5" cols="30" className="add-note-style" type="textarea" placeholder="Tell us what's going on..." {...setDescription}/> 
            </form>
        </div>
    )

}  




export default Submissions;


