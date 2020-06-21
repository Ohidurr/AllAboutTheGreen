import React from "react";
import { Link } from "react-router-dom";

const PlantResults = ({ result }) => {

  const plantList = result.map((plant, i) => {
   return <Link key={i} to={`/plants/${plant.id}`}>
      <li>
      <button name={plant.id} value={plant.common_name}>
        <h2>{plant.common_name}</h2>
        <h4>Scientific Name:</h4>
        <p>{plant.scientific_name}</p>
      </button>
      </li>
    </Link>;
  });

  return(
    <ul>
      {plantList}
      {plantList.length ? plantList : <p>Which plant would you like to search</p>}
    </ul>
  )

};

export default PlantResults;
