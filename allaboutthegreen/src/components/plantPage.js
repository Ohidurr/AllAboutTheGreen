import React, { useState, useEffect } from "react";
// import {useHistory} from 'react-router-dom';
import axios from "axios";
const { REACT_APP_API } = process.env;

const PlantProfile = ({type}) => {
  // const history = useHistory();
  // const [types, setTypes] = useState([]);
  const [plant, setPlant] = useState([]);

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

  const handleChange = async (selection) =>{
      try{

      }catch(error){
          
      }
  }
  return <div>
      <select onChange={(e) =>handleChange(e.target.value)} value={type}>
        <option value={""} disabled>Select your plant</option>
      </select>
  </div>;
};

export default PlantProfile;
