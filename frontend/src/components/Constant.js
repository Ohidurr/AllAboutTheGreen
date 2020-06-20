import PlantSearch from "./PlantSearch";

const { REACT_APP_API } = process.env;

export const BASE_URL = "https://v0.trefle.io/api";
export const PLANT_SEARCH = `${BASE_URL}/plants`;
export const HEROKU =`https://cors-anywhere.herokuapp.com/${PLANT_SEARCH}`
export const TOKEN = REACT_APP_API;
