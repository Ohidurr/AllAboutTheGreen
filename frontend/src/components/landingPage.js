import React, { useState, useEffect } from "react";
import axios from "axios";
import { HEROKU, TOKEN } from "./Constant";
import PlantResults from "./PlantResults";
import PlantSearch from "./PlantSearch";
import PlantContainer from "./PlantContainer";
import NavBar from "./NavBar";
import "../css/landingPage.css";

const { REACT_APP_API } = process.env;

const LandingPage = () => {
  const [feature, setFeature] = useState({});
  const [result, setResult] = useState([]);

  useEffect(() => {
    featuredPlant();
  }, []);

  const featuredPlant = async () => {
    let randomID = Math.floor(Math.random(1) * 100);

    const URL = `?token=${REACT_APP_API}`;
    const API_URL = `https://trefle.io/api/plants/${525330}${URL}`;
    const HEROKU = `https://cors-anywhere.herokuapp.com/${API_URL}`;
    let res = await axios.get(HEROKU);
    setFeature(res.data);
  };

  return (
    <div className="landingPage">
      <h1 id="title"> All About The Green</h1>
      <form id="searchBox" type="text">
        <div className="search">
          <input placeholder="Search"></input>
        </div>
      </form>
      <div className="imgContainer">
        
      <h2 className="monthPlant">Plant of the month:</h2>
        

      <div className="card" onClick="">
        <a href=""></a>
        <img
          id="featuredImg"
          src="https://gardeningsolutions.ifas.ufl.edu/images/plants/flowers/flame_vine_flower.jpg"
          syle="width:100%"
        />
        <div className="cardContainer">
          <h4>
            <b>Flame Vine:</b>
          </h4>
          <p {...feature}>
            {" "}
            The Flame Vine is a unique plant orginally from Brazil. Due to its
            vibrant color, it has quickly become a home-gardening favorite.{" "}
          </p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default LandingPage;
