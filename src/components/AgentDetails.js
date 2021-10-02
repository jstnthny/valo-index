import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Agent({ match }) {
  const [agent, setAgent] = useState({});
  const [role, setRole] = useState([]);
  const [abilities, setAbilities] = useState([]);

  //Api request gets called after component is loaded
  useEffect(() => {
    const fetchAgent = async () => {
      // match allows us to grab the id from the agent that was selected, so we have an id to make the api call
      const url = `https://valorant-api.com/v1/agents/${match.params.id}`;
      const response = await fetch(url);
      const data = await response.json();

      setAgent(data.data);
      // Agent Roles
      setRole(data.data.role);
      // Agent Abilities
      setAbilities(data.data.abilities);
    };
    fetchAgent();
  }, [match.params.id]);

  return (
    <div className="agentDetailsContainer">
      {/* react-router link allows user to go back to the agents page */}
      <Link className="backBtn" to={"/Agents"}>
        Back to Agents
      </Link>
      <h1>{agent.displayName}</h1>
      <div className="flexContainer">
        <img
          src={agent.fullPortrait}
          alt={`Valorant agent named ${agent.displayName}`}
        />
        <div className="agentDescriptionContainer">
          <h2>Description</h2>
          <p>{agent.description}</p>
          <div className="agentRole">
            <h2>Role: {role.displayName}</h2>
            <img
              src={role.displayIcon}
              alt={`An icon of the valorant role ${role.displayName}`}
            />
          </div>
          <p>{role.description}</p>
        </div>
      </div>

      <h2>Abilities</h2>
      {/* Maps through array of agents abilities so it can be rendered onto page */}
      {abilities.map((ability) => (
        <table className="agentAbilities" key={ability.displayName}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>{ability.displayName}</td>
              <td>{ability.description}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
}

export default Agent;
