import React, { useState } from "react";
import axios from "axios";
import { HEROKU, TOKEN } from "./Constant";
import Search from "./Search";
import PlantResults from "./PlantResults";
import Card from './Cards';
import Loading from './Loading';


const PlantSearch = (...args) => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    setLoading(true);
    e.preventDefault();

    axios({
      method: "GET",
      url: HEROKU,
      params: {
        q: search,
        token: TOKEN,
      },
    }).then((result) => {
      setResult(result.data);
      setLoading(false);
    });
  };

  let cardDisplay;
  if(loading){
    cardDisplay = <Loading/>
  }else if(result){
    cardDisplay = <PlantResults result={result} />
  }

  const plantProps = {
    search,
    setSearch,
    handleSubmit,
    ...args,
  };

  return (
    <div className="originalSearch">
      <Search {...plantProps} />
      {/* <PlantResults result={result} /> */}
      <Card>{cardDisplay}</Card>
    </div>
  );
};

export default PlantSearch;
