import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Maps() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    getAgentRequest();
  }, []);

  const getAgentRequest = async () => {
    const url = "https://valorant-api.com/v1/agents";

    const response = await fetch(url);
    const data = await response.json();
    setAgents(data.data);
  };

  return (
    <>
      <h1 className="agentsHeading">Agents</h1>
      <div className="agentsContainer">
        {agents
          .filter(function (agent) {
            if (agent.uuid === "ded3520f-4264-bfed-162d-b080e2abccf9") {
              return false;
            }
            return true;
          })
          .map((agent) => (
            <div key={agent.uuid} className="agentContainer">
              <h2>{agent.displayName}</h2>
              <Link key={agent.uuid} to={`agents/${agent.uuid}`}>
                <img src={agent.displayIcon} alt={agent.displayName} />
              </Link>
            </div>
          ))}
      </div>
    </>
  );
}

export default Maps;
