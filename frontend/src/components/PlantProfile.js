// import React, { useState, useEffect } from "react";
// // import {useHistory} from 'react-router-dom';
// import axios from "axios";
// const { REACT_APP_API } = process.env;

// const PlantProfile = ({type}) => {
//   // const history = useHistory();
//   // const [types, setTypes] = useState([]);
//   const [plants, setPlants] = useState([]);
//   const [types, setTypes] = useState([])

//   const fetchPlant = async () => {
//     const URL = `?token=${REACT_APP_API}`;
//     const API_URL = `https://v0.trefle.io/api/species${URL}`;
//     const HEROKU = `https://cors-anywhere.herokuapp.com/${API_URL}`;
//     try {
//       let res = await axios.get(HEROKU);
//       setPlants(res.data);
//       debugger;
//     } catch (error) {
//       console.log(error);
//       setPlant([]);
//     }
//   };

//   useEffect(() => {
//     fetchPlant();
//     debugger;
//   }, []);

//   const options = plants.map((plant) =>{
//     return <option>{plant}</option>
//   })

//   const handleChange = async (selection) =>{
//       try{
//         let list = await axios.get(selection)
//         setTypes(list)
//       }catch(error){
//         setType([]);
//         console.log(error)
//       }
//   };

//   // const plantOptions = types.map((type) =>{
//   //   return <button></button>
//   // })


//   return <div>
//       <select onChange={(e) =>handleChange(e.target.value)} value={type}>
//         <option value={""} disabled>Select your plant</option>
//         {options}
//       </select>
//   </div>;
// };

// export default PlantProfile;
