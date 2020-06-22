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
        <h2 className="plantName">{plantDetail.common_name}</h2>
        <h3 className="plantFamilyNameTitle">Family Name:</h3>
        <p className="plantFamilyName">
          {plantDetail.family_common_name !== null
            ? plantDetail.family_common_name
            : plantDetail.common_name}
        </p>
        <h3 className="plantSciNameTitle">Scientific Name:</h3>
        <p className="plantSciName">{plantDetail.scientific_name}</p>
        {plantImg(plantDetail.id)}
      </div>
    );
  };

  const plantImg = (id) => {
    if (id === 182557) {
      return (
        <div className="plantImg">
          <ul className="plantImgUl">
            <li className="plantImgLi">
              <img alt="img of a tom" src={Shine} />
            </li>
            <li>
              <img alt="img of a tom" src={Sweet} />
            </li>
            <li>
              <img alt="img of a tom" src={TomatoCurr} />
            </li>
            <li>
              <img alt="img of a tom" src={TomatoSugar} />
            </li>
          </ul>
        </div>
      );
    } else if (id === 171840) {
      return (
        <div className="plantImg">
          <ul className="plantImgUl">
            <li className="plantImgLi">
              <img alt="img of a guav" src={Benefits} />
            </li>
            <li>
              <img alt="img of a guav" src={Getty} />
            </li>
            <li>
              <img alt="img of a guav" src={Growing} />
            </li>
            <li>
              <img alt="img of a guav" src={Strawberry} />
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
    <div className="plantContainerTwo">
      <h1 className="plantContainerTitle">Plant Detail</h1>
      {singlePlantDisplay()}
    </div>
  );
};
export default PlantContainer;
