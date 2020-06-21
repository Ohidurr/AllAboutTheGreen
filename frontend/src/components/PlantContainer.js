import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HEROKU, TOKEN } from "./Constant";
import axios from "axios";

const PlantContainer = () => {
  const params = useParams();
  const [plantDetail, setPlantDetail] = useState({});

  useEffect(() => {
    axios({
      method: "GET",
      url: `${HEROKU}/`,
      params: {
        id: params.id,
        token: TOKEN,
      },
    })
      .then((result) => {
        console.log(result.data)
        setPlantDetail(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.id]);

  const actualPlant = ({ plant }) => {
    console.log(plant);
    return (
      <div key={plant.id}>
        <h1>{plant.name}</h1>
      </div>
    );
  };

  return (
    <div>
      <div>
        {Object.keys(plantDetail).length > 0
          ? actualPlant({ plant: plantDetail })
          : null}
      </div>
    </div>
  );
};
export default PlantContainer;
