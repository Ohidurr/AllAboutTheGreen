import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shine from "../SVGfiles/Shinnecock2016sm.jpeg";
import Sweet from "../SVGfiles/Sweet_Pea_Currant_Tomato__76772.1549402739.webp";
import TomatoCurr from "../SVGfiles/Tomato_CurrantCandylandRed-AAS2016.PRIMARY.jpg";
import TomatoSugar from "../SVGfiles/tomato-sugar-cherry-4840c98a2875fc3f8a0917abba673beb.jpg";
import Benefits from '../SVGfiles/benefits-of-guavas-1296x728-feature.jpg'
import Getty from '../SVGfiles/GettyImages-guava-leaves_1200.jpg'
import Growing from '../SVGfiles/Growing-Guava-The-Complete-Guide-to-Plant-Care-and-Harvest-Guava-FI.jpg';
import Strawberry from '../SVGfiles/Strawberry-Guava-Fragrance-Oil-w.jpg'
import { HEROKU, TOKEN } from "./Constant";
import axios from "axios";

const PlantContainer = () => {
  const params = useParams();
  const [plantDetail, setPlantDetail] = useState({});

  useEffect(() => {
    axios({
      method: "GET",
      url: `${HEROKU}/${params.id}`,
      params: {
        token: TOKEN,
      },
    })
      .then((result) => {
        debugger;
        setPlantDetail(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.id]);

  const singlePlantDisplay = () => {
    debugger;

    return (
      <div className="plantDisplay">
        <h2>{plantDetail.common_name}</h2>
        <h3>Family Name:</h3>
        <p>
          {plantDetail.family_common_name !== null
            ? plantDetail.family_common_name
            : plantDetail.common_name}
        </p>
        <h3>Scientific Name:</h3>
        <p>{plantDetail.scientific_name}</p>
        {plantImg(plantDetail.id)}
      </div>
    );
  };

  const plantImg = (id) => {
    if (id === 182557) {
      return (
        <div>
          <ul>
            <li>
              <img src={Shine} />
            </li>
            <li>
              <img src={Sweet} />
            </li>
            <li>
              <img src={TomatoCurr} />
            </li>
            <li>
              <img src={TomatoSugar} />
            </li>
          </ul>
        </div>
      );
    } else if (id === 171840) {
      return (
        <div>
          <ul>
            <li>
              <img src={Benefits} />
            </li>
            <li>
              <img src={Getty} />
            </li>
            <li>
              <img src={Growing} />
            </li>
            <li>
              <img src={Strawberry} />
            </li>
          </ul>
        </div>
      );
    }
  };

  //   const displayImgs = (images) => {
  //     let imagesArr = [];
  //     for (let i in images) {
  //       imagesArr.push(
  //         <li>
  //           <img key={i} alt="plant images" src={images[i].url} />
  //         </li>
  //       );
  //     }
  //     return imagesArr;
  //   };

  return (
    <div>
      <h1>Plant Detail</h1>
      {singlePlantDisplay()}
    </div>
  );
};
export default PlantContainer;
