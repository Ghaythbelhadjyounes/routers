import React from "react";
import { useParams } from "react-router-dom";
import { CityData } from "../Constants/Data";

function Detail() {
  const params = useParams();
  const City = CityData.find((el) => el.id == params.id);
  return (
    <div>
      <h2>Pays : {City.title}</h2>
      <h2>Superficie : {City.Superficie}</h2>
      <h2>Population : {City.Population}</h2>
    </div>
  );
}

export default Detail;
