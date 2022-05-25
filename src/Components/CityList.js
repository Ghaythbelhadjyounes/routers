import React, { useState } from "react";
import { CityData } from "../Constants/Data";
import CityCard from "./CityCard";

function CityList({ input }) {
  const [city, setCity] = useState(CityData);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
        }}
      >
        {city
          .filter((city) =>
            city.title.toLowerCase().includes(input.toLowerCase())
          )
          .map((el) => (
            <CityCard key={el.id} city={el} />
          ))}
      </div>
      <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
    </div>
  );
}

export default CityList;
