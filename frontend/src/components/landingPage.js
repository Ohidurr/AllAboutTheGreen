import React, {useState, useEffect} from "react"
import axios from 'axios'
import { HEROKU, TOKEN } from "./Constant";
import PlantResults from "./PlantResults"
import PlantSearch from "./PlantSearch"
import PlantContainer from './PlantContainer'
import NavBar from './NavBar'
import '../css/landingPage.css'

const { REACT_APP_API } = process.env;


const LandingPage = () => {

    const [feature, setFeature] = useState({})
    const [result, setResult] = useState([]);


    useEffect(()=>{
        featuredPlant()
    },[])
  
  const  featuredPlant = async () => {
        let randomID = (Math.floor(Math.random(1) * 100))

        const URL = `?token=${REACT_APP_API}`;
        const API_URL = `https://trefle.io/api/plants/${525330}${URL}`; 
        const HEROKU = `https://cors-anywhere.herokuapp.com/${API_URL}`;
        let res = await axios.get (HEROKU);
        setFeature(res.data)
    }
  
    
 return(
    <div>
    <header id="banner"></header>

        <NavBar/>
        <h1 id="title"> All About The Green</h1>
        <form id="searchBox" type="text">
        <div className="search">
        <input  placeholder ="Search" ></input>
        </div>
        </form>
            <h2>Featured</h2>
            <div class="card" onClick="">
            <a href=""></a>
            <img src="https://gardeningsolutions.ifas.ufl.edu/images/plants/flowers/flame_vine_flower.jpg" syle="width:100%"/>
  <div class="container">
    <h4><b>Plant of the Month:</b></h4>
    <p {...feature}> Flame Vine</p>
  </div>
</div>
    </div>
    )
}


export default LandingPage