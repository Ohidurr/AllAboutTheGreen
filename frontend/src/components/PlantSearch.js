import React, { useState } from "react";
import axios from "axios";
import { HEROKU, TOKEN } from "./Constant";
import Search from "./Search";
import PlantResults from './PlantResults'
import NavBar from './NavBar'

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
    <NavBar/>
      <Search {...plantProps} />
      <PlantResults result={result} />
    </>
  );
};

export default PlantSearch;

