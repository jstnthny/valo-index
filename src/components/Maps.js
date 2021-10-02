import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Maps() {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    getMapRequest();
  }, []);

  const getMapRequest = async () => {
    const url = "https://valorant-api.com/v1/maps";

    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    setMaps(data.data);
  };

  return (
    <>
      <h1 className="mapsHeading">Valorant Maps</h1>
      <div className="mapsContainer">
        {maps.map((map) => (
          <div key={map.uuid} className="mapContainer">
            <h2 key={map.uuid}>
              <Link to={`maps/${map.uuid}`}>{map.displayName}</Link>
            </h2>
            <Link to={`maps/${map.uuid}`}>
              <img src={map.listViewIcon} alt="{map.displayName}" />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Maps;
