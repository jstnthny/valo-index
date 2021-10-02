// import useState & useEffect hooks
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Agents() {
  // useState hook to store api data into agents state variable
  const [agents, setAgents] = useState([]);

  //Api request gets called after component is loaded
  useEffect(() => {
    getAgentRequest();
  }, []);

  const getAgentRequest = async () => {
    const url = "https://valorant-api.com/v1/agents";

    // API call fetch method
    const response = await fetch(url);
    const data = await response.json();
    // updates state variable (agents) to store api data
    setAgents(data.data);
  };

  return (
    <>
      <h1 className="agentsHeading">Agents</h1>
      <div className="agentsContainer">
        {agents
          //function to not display duplicate character
          .filter((agent) => {
            if (agent.uuid === "ded3520f-4264-bfed-162d-b080e2abccf9") {
              return false;
            }
            return true;
          })
          .map((agent) => (
            // Maps through array of agents to render onto page
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

export default Agents;
