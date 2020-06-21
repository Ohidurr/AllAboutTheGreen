import React from "react";
import { HEROKU, TOKEN } from "../components/Constant";
import { Link } from "react-router-dom";

const PlantResults = ({ result }) => {
  return (
    <div className="PlantResult">
      {result.map((plant) => {
        debugger;
        return (
          <>
            <h2>Name:</h2>
            <Link key={plant.id} to={`/plant/${plant.id}`}>
              <h2>{plant.common_name}</h2>
            </Link>
            <h4>Scientific Name:</h4>
            <p>{plant.scientific_name}</p>
          </>
        );
      })}
    </div>
  );
};

export default PlantResults;
