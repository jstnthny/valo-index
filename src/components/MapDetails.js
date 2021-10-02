import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Map({ match }) {
  const [map, setMap] = useState({});

  useEffect(() => {
    const fetchMap = async () => {
      const url = `https://valorant-api.com/v1/maps/${match.params.id}`;
      const response = await fetch(url);
      const data = await response.json();

      setMap(data.data);
      // console.log(data.data);
    };

    fetchMap();
  }, [match.params.id]);

  return (
    <div className="mapContainer">
      <Link className="backBtn" to={"/Maps"}>
        Back to Maps
      </Link>
      <h1>{map.displayName}</h1>
      <p>{map.description}</p>
      <img src={map.splash} alt={map.displayName} />
    </div>
  );
}

export default Map;
