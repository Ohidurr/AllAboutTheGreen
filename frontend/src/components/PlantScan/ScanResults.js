import React from 'react';
import poisonIvy from '../../ScanResultImages/poisonIvy.png';
import poisonOak from '../../ScanResultImages/poisonOak.png';
import poisonSumac from '../../ScanResultImages/poisonSumac.png';
import userSubmission from '../../ScanResultImages/userSubmission.jpeg';
import staghornSumac from '../../ScanResultImages/staghornSumac.jpeg';
import smoothSumac from '../../ScanResultImages/smoothSumac.jpeg';
import regularSumac from '../../ScanResultImages/regularSumac.jpeg';
import '../../css/scanresults.css'

const ScanResults = () => {

    return (
    <div className="scan-result-main-div">
            <div className="user-info-div2">
                <h2> Your Scan Results</h2>
            </div>


            <div className="user-scan-result">
                    <h2> Your Image</h2>
                    <br/>
                    <img className="user-image" alt="user-img" src={userSubmission} />
                
            </div>
{/* ---------------------------------------- */}
<div className="all-the-possibilities">
    <div className="possib-divs" >
        <p> Plant Name: Poison Ivy</p>
        <p> Probabilty: 57.3% </p>
        <p> About: </p>
        <img className="user-scan-results-img" alt="poison-ivy-img" src={poisonIvy}/>
    </div>

    <div className="possib-divs"> 
        <p> Plant Name: Poison Oak </p>
        <p> Probabilty: 27.3% </p>
        <p> About: </p>
        <img className="user-scan-results-img" alt="poison-oak-img" src={poisonOak} />
    </div>

    <div className="possib-divs">
        <p> Plant Name: Poison Sumac</p>
        <p> Probabilty: 89.4% </p>
        <p> About: </p>
        <img className="user-scan-results-img" alt="poison-ivy-sumac" src={poisonSumac} />
    </div>
</div>


{/* --------------------------------------------- */}
   <div className="similar-plant-results" >
        {/* <div>
            <h3> Similar Plants</h3>
        </div> */}
            <div className="each-similar-plant"> 
                <p className="plant-na" > Plant Name: Staghorn Sumac</p>
                <p className="plant-s-na"> Scientific Name: Rhus Typhina</p>
                <p> About: Grows fuzzy fruit and stems and is named “staghorn” because the fuzzy fruit spike resembles a stag’s horn in velvet.</p>
                <img className="sim-pic-result" alt="staghorn-pic" src={staghornSumac} />
            </div>

            <div className="each-similar-plant"> 
                <p className="plant-na"> Plant Name: Smooth Sumac</p>
                <p className="plant-s-na"> Scientific Name: Rhus glabra</p>
                <p> About: Smooth, like it's name </p>
                <img className="sim-pic-result" alt="pic-of-smooth-sumac" src={smoothSumac}/>
            </div>

            <div className="each-similar-plant"> 
                <p className="plant-na"> Plant Name: Sumac</p>
                <p className="plant-s-na"> Scientific Name: Ailanthus Altissima</p>
                <p> About: An invasive tree from China with compound leaves that resemble sumac.  However its leaflets are notched, especially at the base, and the tree produces seeds instead of a fruit spike.</p>
                <img className="sim-pic-result" alt="pic-of-sumac" src={regularSumac}/>
            </div>
   </div>


    </div>
       
    )

}

export default ScanResults