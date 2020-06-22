import React from "react";
import { useHistory } from "react-router-dom";
import '../css/PlantResults.css'

const PlantResults = ({ result }) => {
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.push(`/plants/${e.target.name}`, { url: e.target.name });
  };

  const uppercase = {
    textTransform: "uppercase"
  }

  const plantList = result.map((plant) => {

    if(plant.common_name !== null){
      return (
        <div key={plant.id} className="plant">
          <li className="plantResultLi">
              <h2 style={{uppercase}}>{plant.common_name}</h2>
              <p><b>Scientific Name:</b> {plant.scientific_name}</p>
              <button
              name={plant.id}
              value={plant.common_name}
              onClick={handleClick}
              >Click to learn More about {plant.common_name}
              </button>
          </li>
        </div>
      );
    }
  });

  return (
    <div className="plantResult">
      {plantList}
    </div>
  );
};

export default PlantResults;
