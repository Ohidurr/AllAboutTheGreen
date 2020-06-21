import React, {useState, useEffect} from "react"
import axios from 'axios'
import PlantPage from './PlantPage'
import { HEROKU, TOKEN } from "./Constant";
import PlantResults from "./PlantResults"
import PlantSearch from "./PlantSearch"
// import Constant from "./Constant"

import '../css/landingPage.css'

const { REACT_APP_API } = process.env;


const LandingPage = () => {
    
    const [search, setSearch] = useState(false)
    const [plant, setPlant] = useState([])
    const [feature, setFeature] = useState({})

    useEffect(()=>{
        featuredPlant()
    },[])
    const fetchPlant = async () => {
    const URL = `?token=${REACT_APP_API}`;
    const API_URL = `https://v0.trefle.io/api/species${URL}`;
    const HEROKU = `https://cors-anywhere.herokuapp.com/${API_URL}`;
    try {
      let res = await axios.get(HEROKU);
      setPlant(res.data);
    //   debugger;
    } catch (error) {
      console.log(error);
      setPlant([]);
    }
  };

  useEffect(() => {
    fetchPlant();
    // debugger;
  }, []);

    const searchBox = (async (str) => {
        if(str === ""){
            setSearch(false)
            return fetchPlant
        }
        try{
            let res = await axios.get("https://trefle.io/api/plants/?q")
        }catch (error){
            console.log("error 402, invalid search");
            
        }
    })



    const  featuredPlant = async () => {
        let randomID = (Math.floor(Math.random(1) * 100))

        const URL = `?token=${REACT_APP_API}`;
        const API_URL = `https://trefle.io/api/plants/${525306}${URL}`; 
        const HEROKU = `https://cors-anywhere.herokuapp.com/${API_URL}`;
        let res = await axios.get (HEROKU);
        setFeature(res.data)
    }

    const handleSearch = (e) => {
        // e.preventDeafult()
        searchBox(e.target.value)
    }
    
    
    
 return(
    <div>
    <header id="banner">Logo</header>
        <h1 id="title"> All About the Green </h1>
        <form id="searchBox" type="text">
        <input placeholder ="Search" onChange={handleSearch}></input>
        </form>
            <h2>Featured</h2>
 <div id="cardRow">
    <div class="column" {...feature}>
    <div class="card"></div>
  </div>
</div>

        <footer></footer>
 
    </div>
    )
}


export default LandingPage