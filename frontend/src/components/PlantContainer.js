import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { HEROKU, TOKEN } from "./Constant";
import axios from "axios";

const PlantContainer = () => {
  const params = useParams();
  const [plantDetail, setPlantDetail] = useState({});

 

    useEffect(() => {
        debugger
      axios({
        method: "GET",
        url: `${HEROKU}/${params.id}`,
        params: {
          token: TOKEN,
        },
      })
        .then((result) => {
          console.log(result.data)
          setPlantDetail(result.data);
          debugger
        })
        .catch((error) => {
          console.log(error);
        });
    }, [params.id]);


  return (
    <div>
      <h1>Plant Detail</h1>
    </div>
  );
};
export default PlantContainer;
