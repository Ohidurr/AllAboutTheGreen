import React, { useState } from 'react';
import { ScanToken } from './Scankey';
import '../../css/plantscan.css'




const PlantScan = () => {
    const [files, setFiles] = useState([]);

    // const fetchPlantData = () => {

    // }

    // const handleClick = ({ScanToken}) => {
    //     const promises = files.map((file) => {
    //         return new Promise((resolve, reject) => {
    //         const reader = new FileReader();
    //         reader.onload = (event) => {
    //             const res = event.target.result;
    //             console.log(res);
    //             resolve(res)
    //         }
    //         reader.readAsDataURL(file)
    //         })
    //     })
    
    //     Promise.all(promises).then((base64files) =>{
    //         console.log(base64files)
    //         debugger

    //         const data = {
    //             api_key: ScanToken,
    //             images: base64files,
    //             modifiers: ["crops_fast", "similar_images"],
    //             plant_language: "en",
    //             plant_details: ["common_names",
    //                               "url",
    //                               "name_authority",
    //                               "wiki_description",
    //                               "taxonomy",
    //                               "synonyms"]
    //           };

    //           fetch('https://api.plant.id/v2/identify', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('Success:', data);
    //   })
    //   .catch((error) => {
    //     console.error('Error:', error);
    //   });
    // })

    // }


    const handleClick = async (e)=>{
      e.preventDefault()
      
      if(e.target.value === "") {
        setTimeout(function() {
            window.location = "../plant-scan/results";
        },1000) 
      }else{
            debugger
          alert("Please submit an image")
      }
    }
    
    return (
        <div className="hello-main-top">

          <h2 className="image-scan-heading"> Image Scan </h2>
            <form className="image-scan-form">
                <input file={files} type="file" multiple />
                <button onClick={handleClick} type="button">Process Image</button>
            </form>
        </div>
    )

}


export default PlantScan;
