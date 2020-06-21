import React from "react";
import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";

const PlantResults = ({ result }) => {
  const history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.push(`/plants/${e.target.name}`, { url: e.target.name });
  };

  const plantList = result.map((plant) => {
      return (
        <div key={plant.id}>
          <li>
            <button
              name={plant.id}
              value={plant.common_name}
              onClick={handleClick}
              >Click to learn More about {plant.common_name}
              </button>
              <h2>{plant.common_name}</h2>
              <h4>Scientific Name:</h4>
              <p>{plant.scientific_name}</p>
          </li>
        </div>
      );
  });

  return (
    <ul>
      {plantList}
      {plantList.length ? (
        plantList
      ) : (
        <p>Which plant would you like to search</p>
      )}
    </ul>
  );
};

export default PlantResults;
