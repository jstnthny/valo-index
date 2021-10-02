import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Agent({ match }) {
  const [agent, setAgent] = useState({});
  const [role, setRole] = useState([]);
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    const fetchAgent = async () => {
      const url = `https://valorant-api.com/v1/agents/${match.params.id}`;
      const response = await fetch(url);
      const data = await response.json();

      setAgent(data.data);
      setRole(data.data.role);
      setAbilities(data.data.abilities);
    };
    fetchAgent();
  }, [match.params.id]);

  return (
    <div className="agentDetailsContainer">
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
