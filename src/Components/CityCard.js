import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CityCard({ city }) {
  const navigate = useNavigate();
  return (
    <div
      style={{ display: "flex", marginTop: "7%" }}
      onClick={() => navigate(`/City/${city.id}`)}
    >
      <div className="container d-flex align-items-center justify-content-center position-relative flex-wrap">
        <div className="card d-flex position-relative flex-column">
          <div className="imgContainer">
            <img
              src={city.url}
              alt="Affiches"
              style={{ height: "250px", width: "250px" }}
            />
          </div>
          <div className="content">
            <h2>{city.title}</h2>
            <Button variant="info" onClick={() => navigate(`/City/${city.id}`)}>
              Détails
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CityCard;
