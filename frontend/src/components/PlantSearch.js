import React, { useState } from "react";
import axios from "axios";
// const { REACT_APP_API } = process.env;
import { HEROKU, TOKEN } from "./Constant";
import Search from "./Search";
import PlantResults from './PlantResults'

const PlantSearch = (...args) => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios({
      method: "GET",
      url: HEROKU,
      params: {
        q: search,
        token: TOKEN,
      },
    }).then((result) => {
      console.log(result.data);
      setResult(result.data);
    });
  };
  const plantProps = {
    search,
    setSearch,
    handleSubmit,
    ...args,
  };

  return (
    <>
      <Search {...plantProps} />
      <PlantResults result={result} />
    </>
  );
};

export default PlantSearch;

