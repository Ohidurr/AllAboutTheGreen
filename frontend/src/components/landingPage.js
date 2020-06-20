import React, {useState} from "react"
import axios from 'axios'
import PlantPage from './PlantPage'
const { REACT_APP_API } = process.env;


const LandingPage = () => {
    
    const [search, setSearch] = useState(false)
    const [plant, setPlant] = useState([])

    const fetchPlant = async () => {
    const URL = `?token=${REACT_APP_API}`;
    const API_URL = `https://v0.trefle.io/api/species${URL}`;
    const HEROKU = `https://cors-anywhere.herokuapp.com/${API_URL}`;
    try {
      let res = await axios.get(HEROKU);
      setPlant(res.data);
      debugger;
    } catch (error) {
      console.log(error);
      setPlant([]);
    }
  };

  useEffect(() => {
    fetchPlant();
    debugger;
  }, []);

    const searchBox = (async (str) => {
        if(str === ""){
            setSearch(fail)
            return fetchPlant
        }
        try{
            let res = await axios.get('https://trefle.io/api/plants/?q{`req.params.str`})
        }
    })



    const featuredPlant = () => {

    }

    const handleSearch = (e) => {
        e.preventDeafult()
        searchBox(e.target.value)
    }
 return(
    <div>
        <h1> All About the Green </h1>
        <form id="searchBox">
        <input placeholder ="Search" onChange={handleSearch}></input>
        </form>
 
    </div>
    )
}


export default LandingPage