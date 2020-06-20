import React, { useState } from "react";
import axios from "axios";
// const { REACT_APP_API } = process.env;
import { HEROKU, TOKEN } from "./Constant";
import Search from "./Search";

const PlantSearch = (...args) => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    debugger
    
    axios({
      method: "GET",
      url: HEROKU,
      params: {
        q: search,
        token: TOKEN,
      },
    }).then((result) => {
      console.log(result);
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
    </>
  );
};

export default PlantSearch;

// const PlantProfile = () => {
//   // const history = useHistory();
//   // const [plants, setPlants] = useState([]);
//   // const [types, setTypes] = useState([]);
//   const [search, setSearch] = useState("");
//   console.log(search);
//   // const onClick = (e) => {
//   //   e.preventDefault();
//   //   history.push();
//   //   debugger;
//   // };

//   const fetchPlant = async (e) => {

//     const URL = `?token=${REACT_APP_API}&q=${e}`;
//     const API_URL = `https://v0.trefle.io/api/plants${URL}`;
//     const HEROKU = `https://cors-anywhere.herokuapp.com/${API_URL}`;
//     try {
//       let res = await axios.get(HEROKU);
//       // setPlants(res.data);
//     } catch (error) {
//       console.log(error);
//       // setPlants([]);
//     }
//   };

//   // useEffect(() => {
//   //   fetchPlant();
//   // }, []);

//   // const handleChange = async (selection) => {
//   //   try {
//   //     let list = await axios.get(selection);
//   //     setTypes(list);
//   //   } catch (error) {
//   //     setTypes([]);
//   //     console.log(error);
//   //   }
//   // };

//   // const plantOptions = types.map((type) => {
//   //   return <button onClick={onClick}>{type}</button>;
//   // });

//   return (
//     <div>
//       {/* <form></form>

//       <select onChange={(e) => handleChange(e.target.value)} value={type}>
//         <option value={""} disabled>
//           Select your plant
//         </option>
//         {options}
//       </select>
//       <div className="plantList">{plantOptions}</div> */}
//       <form onSubmit={fetchPlant()}>
//         <input
//           type="text"
//           placeholder="search"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//         <input type="submit" />
//       </form>
//     </div>
//   );
// };

// export default PlantProfile;
