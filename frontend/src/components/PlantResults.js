import React from "react";
import {HEROKU, TOKEN} from '../components/Constant'
import {Link} from 'react-router-dom';

const PlantResults = ({ result }) => {
    return <div className="PlantResult">{
        result.map(plant =>{
            debugger
          return(
              <Link key={plant.id} to={`${HEROKU}/${plant.id}/${TOKEN}`}>
            <h2>{plant.common_name}</h2>
              </Link>
            );
      })
  }</div>;
};

export default PlantResults;
