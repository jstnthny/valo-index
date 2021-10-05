import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AgentSelector() {
  const [map, setMap] = useState("Split");
  const [agent, setAgent] = useState({});
  const [difficulty, setDifficulty] = useState("Easy");
  const [role, setRole] = useState("Duelist");
  const [suggestedAgent, setSuggestedAgent] = useState("");
  //   Duelist
  const jett = "add6443a-41bd-e414-f6ad-e58d267f4e95";
  const phoenix = "eb93336a-449b-9c1b-0a54-a891f7921d69";
  const yoru = "7f94d92c-4234-0a36-9646-3a87eb8b5c89";
  const raze = "f94c3b30-42be-e959-889c-5aa313dba261";
  const reyna = "a3bfb853-43b2-7238-a4f1-ad90e9e46bcc";
  //  Sentinels
  const sage = "569fdd95-4d10-43ab-ca70-79becc718b46";
  const killjoy = "1e58de9c-4950-5125-93e9-a0aee9f98746";
  const cypher = "117ed9e3-49f3-6512-3ccf-0cada7e3823b";
  //   Controllers
  const omen = "8e253930-4c05-31dd-1b6c-968525494517";
  const astra = "41fb69c1-4189-7b37-f117-bcaf1e96f1bf";
  const brimstone = "9f0d8ba9-4140-b941-57d3-a7ad57c6b417";
  const viper = "707eab51-4836-f488-046a-cda6bf494859";
  // Initiators
  const sova = "320b2a48-4d9b-a075-30f1-1f93a9b638fa";
  const skye = "6f2a04ca-43e0-be17-7f36-b3908627744d";
  const breach = "5f8d3a7f-467b-97f3-062c-13acf203c006";
  const kayo = "601dbbe7-43ce-be57-2a40-4abd24953621";

  useEffect(() => {
    const fetchAgent = async () => {
      // match allows us to grab the id from the agent that was selected, so we have an id to make the api call
      const url = `https://valorant-api.com/v1/agents/${suggestedAgent}`;
      const response = await fetch(url);
      const data = await response.json();

      setAgent(data.data);
    };
    fetchAgent();
  }, [suggestedAgent]);
  //   Suggested Agents
  useEffect(() => {
    if (map === "Split" && difficulty === "Easy" && role === "Duelist") {
      setSuggestedAgent(phoenix);
    } else if (
      map === "Split" &&
      difficulty === "Medium" &&
      role === "Duelist"
    ) {
      setSuggestedAgent(jett);
    } else if (map === "Split" && difficulty === "Hard" && role === "Duelist") {
      setSuggestedAgent(yoru);
    }
    // Split - Sentinels
    else if (map === "Split" && difficulty === "Easy" && role === "Sentinels") {
      setSuggestedAgent(sage);
    } else if (
      map === "Split" &&
      difficulty === "Medium" &&
      role === "Sentinels"
    ) {
      setSuggestedAgent(killjoy);
    } else if (
      map === "Split" &&
      difficulty === "Hard" &&
      role === "Sentinels"
    ) {
      setSuggestedAgent(cypher);
    }
    // Split - Controllers
    else if (
      map === "Split" &&
      difficulty === "Easy" &&
      role === "Controllers"
    ) {
      setSuggestedAgent(brimstone);
    } else if (
      map === "Split" &&
      difficulty === "Medium" &&
      role === "Controllers"
    ) {
      setSuggestedAgent(omen);
    } else if (
      map === "Split" &&
      difficulty === "Hard" &&
      role === "Controllers"
    ) {
      setSuggestedAgent(viper);
    }
    // Split - Initiators
    else if (
      map === "Split" &&
      difficulty === "Easy" &&
      role === "Initiators"
    ) {
      setSuggestedAgent(skye);
    } else if (
      map === "Split" &&
      difficulty === "Medium" &&
      role === "Initiators"
    ) {
      setSuggestedAgent(breach);
    } else if (
      map === "Split" &&
      difficulty === "Hard" &&
      role === "Initiators"
    ) {
      setSuggestedAgent(kayo);
    }
    //   Bind - Duelist
    else if (map === "Bind" && difficulty === "Easy" && role === "Duelist") {
      setSuggestedAgent(phoenix);
    } else if (
      map === "Bind" &&
      difficulty === "Medium" &&
      role === "Duelist"
    ) {
      setSuggestedAgent(jett);
    } else if (map === "Bind" && difficulty === "Hard" && role === "Duelist") {
      setSuggestedAgent(reyna);
    }
    // Bind - Sentinels
    else if (map === "Bind" && difficulty === "Easy" && role === "Sentinels") {
      setSuggestedAgent(sage);
    } else if (
      map === "Bind" &&
      difficulty === "Medium" &&
      role === "Sentinels"
    ) {
      setSuggestedAgent(killjoy);
    } else if (
      map === "Bind" &&
      difficulty === "Hard" &&
      role === "Sentinels"
    ) {
      setSuggestedAgent(cypher);
    }
    // Bind - Controllers
    else if (
      map === "Bind" &&
      difficulty === "Easy" &&
      role === "Controllers"
    ) {
      setSuggestedAgent(omen);
    } else if (
      map === "Bind" &&
      difficulty === "Medium" &&
      role === "Controllers"
    ) {
      setSuggestedAgent(astra);
    } else if (
      map === "Bind" &&
      difficulty === "Hard" &&
      role === "Controllers"
    ) {
      setSuggestedAgent(viper);
    }
    // Bind - Initiators
    else if (map === "Bind" && difficulty === "Easy" && role === "Initiators") {
      setSuggestedAgent(skye);
    } else if (
      map === "Bind" &&
      difficulty === "Medium" &&
      role === "Initiators"
    ) {
      setSuggestedAgent(breach);
    } else if (
      map === "Bind" &&
      difficulty === "Hard" &&
      role === "Initiators"
    ) {
      setSuggestedAgent(sova);
    }
    //   Ascent - Duelist
    else if (map === "Ascent" && difficulty === "Easy" && role === "Duelist") {
      setSuggestedAgent(phoenix);
    } else if (
      map === "Ascent" &&
      difficulty === "Medium" &&
      role === "Duelist"
    ) {
      setSuggestedAgent(jett);
    } else if (
      map === "Ascent" &&
      difficulty === "Hard" &&
      role === "Duelist"
    ) {
      setSuggestedAgent(raze);
    }
    // Ascent - Sentinels
    else if (
      map === "Ascent" &&
      difficulty === "Easy" &&
      role === "Sentinels"
    ) {
      setSuggestedAgent(sage);
    } else if (
      map === "Ascent" &&
      difficulty === "Medium" &&
      role === "Sentinels"
    ) {
      setSuggestedAgent(killjoy);
    } else if (
      map === "Ascent" &&
      difficulty === "Hard" &&
      role === "Sentinels"
    ) {
      setSuggestedAgent(cypher);
    }
    // Ascent - Controllers
    else if (
      map === "Ascent" &&
      difficulty === "Easy" &&
      role === "Controllers"
    ) {
      setSuggestedAgent(brimstone);
    } else if (
      map === "Ascent" &&
      difficulty === "Medium" &&
      role === "Controllers"
    ) {
      setSuggestedAgent(omen);
    } else if (
      map === "Ascent" &&
      difficulty === "Hard" &&
      role === "Controllers"
    ) {
      setSuggestedAgent(astra);
    }
    // Ascent - Initiators
    else if (
      map === "Ascent" &&
      difficulty === "Easy" &&
      role === "Initiators"
    ) {
      setSuggestedAgent(skye);
    } else if (
      map === "Ascent" &&
      difficulty === "Medium" &&
      role === "Initiators"
    ) {
      setSuggestedAgent(kayo);
    } else if (
      map === "Ascent" &&
      difficulty === "Hard" &&
      role === "Initiators"
    ) {
      setSuggestedAgent(sova);
    }
    //   Fracture - Duelist
    else if (
      map === "Fracture" &&
      difficulty === "Easy" &&
      role === "Duelist"
    ) {
      setSuggestedAgent(phoenix);
    } else if (
      map === "Fracture" &&
      difficulty === "Medium" &&
      role === "Duelist"
    ) {
      setSuggestedAgent(raze);
    } else if (
      map === "Fracture" &&
      difficulty === "Hard" &&
      role === "Duelist"
    ) {
      setSuggestedAgent(yoru);
    }
    // Fracture - Sentinels
    else if (
      map === "Fracture" &&
      difficulty === "Easy" &&
      role === "Sentinels"
    ) {
      setSuggestedAgent(sage);
    } else if (
      map === "Fracture" &&
      difficulty === "Medium" &&
      role === "Sentinels"
    ) {
      setSuggestedAgent(killjoy);
    } else if (
      map === "Fracture" &&
      difficulty === "Hard" &&
      role === "Sentinels"
    ) {
      setSuggestedAgent(cypher);
    }
    // Fracture- Controllers
    else if (
      map === "Fracture" &&
      difficulty === "Easy" &&
      role === "Controllers"
    ) {
      setSuggestedAgent(brimstone);
    } else if (
      map === "Fracture" &&
      difficulty === "Medium" &&
      role === "Controllers"
    ) {
      setSuggestedAgent(omen);
    } else if (
      map === "Fracture" &&
      difficulty === "Hard" &&
      role === "Controllers"
    ) {
      setSuggestedAgent(astra);
    }
    // Fracture - Initiators
    else if (
      map === "Fracture" &&
      difficulty === "Easy" &&
      role === "Initiators"
    ) {
      setSuggestedAgent(skye);
    } else if (
      map === "Fracture" &&
      difficulty === "Medium" &&
      role === "Initiators"
    ) {
      setSuggestedAgent(kayo);
    } else if (
      map === "Fracture" &&
      difficulty === "Hard" &&
      role === "Initiators"
    ) {
      setSuggestedAgent(sova);
    }
    //   Breeze - Duelist
    else if (map === "Breeze " && difficulty === "Easy" && role === "Duelist") {
      setSuggestedAgent(phoenix);
    } else if (
      map === "Breeze" &&
      difficulty === "Medium" &&
      role === "Duelist"
    ) {
      setSuggestedAgent(reyna);
    } else if (
      map === "Breeze" &&
      difficulty === "Hard" &&
      role === "Duelist"
    ) {
      setSuggestedAgent(yoru);
    }
    // Breeze  - Sentinels
    else if (
      map === "Breeze" &&
      difficulty === "Easy" &&
      role === "Sentinels"
    ) {
      setSuggestedAgent(sage);
    } else if (
      map === "Breeze" &&
      difficulty === "Medium" &&
      role === "Sentinels"
    ) {
      setSuggestedAgent(killjoy);
    } else if (
      map === "Breeze" &&
      difficulty === "Hard" &&
      role === "Sentinels"
    ) {
      setSuggestedAgent(cypher);
    }
    // Breeze - Controllers
    else if (
      map === "Breeze" &&
      difficulty === "Easy" &&
      role === "Controllers"
    ) {
      setSuggestedAgent(omen);
    } else if (
      map === "Breeze" &&
      difficulty === "Medium" &&
      role === "Controllers"
    ) {
      setSuggestedAgent(viper);
    } else if (
      map === "Breeze" &&
      difficulty === "Hard" &&
      role === "Controllers"
    ) {
      setSuggestedAgent(astra);
    }
    // Breeze - Initiators
    else if (
      map === "Breeze" &&
      difficulty === "Easy" &&
      role === "Initiators"
    ) {
      setSuggestedAgent(skye);
    } else if (
      map === "Breeze" &&
      difficulty === "Medium" &&
      role === "Initiators"
    ) {
      setSuggestedAgent(sova);
    } else if (
      map === "Breeze" &&
      difficulty === "Hard" &&
      role === "Initiators"
    ) {
      setSuggestedAgent(breach);
    }
    //   Icebox - Duelist
    else if (map === "Icebox" && difficulty === "Easy" && role === "Duelist") {
      setSuggestedAgent(phoenix);
    } else if (
      map === "Icebox" &&
      difficulty === "Medium" &&
      role === "Duelist"
    ) {
      setSuggestedAgent(raze);
    } else if (
      map === "Icebox" &&
      difficulty === "Hard" &&
      role === "Duelist"
    ) {
      setSuggestedAgent(reyna);
    }
    // Icebox - Sentinels
    else if (
      map === "Icebox" &&
      difficulty === "Easy" &&
      role === "Sentinels"
    ) {
      setSuggestedAgent(sage);
    } else if (
      map === "Icebox" &&
      difficulty === "Medium" &&
      role === "Sentinels"
    ) {
      setSuggestedAgent(killjoy);
    } else if (
      map === "Icebox" &&
      difficulty === "Hard" &&
      role === "Sentinels"
    ) {
      setSuggestedAgent(cypher);
    }
    // Icebox- Controllers
    else if (
      map === "Icebox" &&
      difficulty === "Easy" &&
      role === "Controllers"
    ) {
      setSuggestedAgent(brimstone);
    } else if (
      map === "Icebox" &&
      difficulty === "Medium" &&
      role === "Controllers"
    ) {
      setSuggestedAgent(viper);
    } else if (
      map === "Icebox" &&
      difficulty === "Hard" &&
      role === "Controllers"
    ) {
      setSuggestedAgent(astra);
    }
    // Icebox- Initiators
    else if (
      map === "Icebox" &&
      difficulty === "Easy" &&
      role === "Initiators"
    ) {
      setSuggestedAgent(skye);
    } else if (
      map === "Icebox" &&
      difficulty === "Medium" &&
      role === "Initiators"
    ) {
      setSuggestedAgent(sova);
    } else if (
      map === "Icebox" &&
      difficulty === "Hard" &&
      role === "Initiators"
    ) {
      setSuggestedAgent(kayo);
    }
    //   Haven - Duelist
    else if (map === "Haven" && difficulty === "Easy" && role === "Duelist") {
      setSuggestedAgent(raze);
    } else if (
      map === "Haven" &&
      difficulty === "Medium" &&
      role === "Duelist"
    ) {
      setSuggestedAgent(phoenix);
    } else if (map === "Haven" && difficulty === "Hard" && role === "Duelist") {
      setSuggestedAgent(yoru);
    }
    //   Haven - Sentintels
    else if (map === "Haven" && difficulty === "Easy" && role === "Sentinels") {
      setSuggestedAgent(sage);
    } else if (
      map === "Haven" &&
      difficulty === "Medium" &&
      role === "Sentinels"
    ) {
      setSuggestedAgent(killjoy);
    } else if (
      map === "Haven" &&
      difficulty === "Hard" &&
      role === "Sentinels"
    ) {
      setSuggestedAgent(cypher);
    }
    // Haven - Controllers
    else if (
      map === "Haven" &&
      difficulty === "Easy" &&
      role === "Controllers"
    ) {
      setSuggestedAgent(brimstone);
    } else if (
      map === "Haven" &&
      difficulty === "Medium" &&
      role === "Controllers"
    ) {
      setSuggestedAgent(omen);
    } else if (
      map === "Haven" &&
      difficulty === "Hard" &&
      role === "Controllers"
    ) {
      setSuggestedAgent(viper);
    }
    // Haven - Initiators
    else if (
      map === "Haven" &&
      difficulty === "Easy" &&
      role === "Initiators"
    ) {
      setSuggestedAgent(skye);
    } else if (
      map === "Haven" &&
      difficulty === "Medium" &&
      role === "Initiators"
    ) {
      setSuggestedAgent(sova);
    } else if (
      map === "Haven" &&
      difficulty === "Hard" &&
      role === "Initiators"
    ) {
      setSuggestedAgent(kayo);
    }
  }, [map, difficulty, role]);

  return (
    <div className="agentSelectorContainer">
      <h1>Valorant Agent Selector</h1>
      <form>
        {/* Map */}
        <div>
          <label htmlFor="map">Map</label>
          <select value={map} onChange={(e) => setMap(e.target.value)}>
            <option value="Bind">Bind</option>
            <option value="Split">Split</option>
            <option value="Ascent">Ascent</option>
            <option value="Fracture">Fracture</option>
            <option value="Breeze">Breeze</option>
            <option value="Icebox">Icebox</option>
            <option value="Haven">Haven</option>
          </select>
        </div>

        {/* Difficulty */}
        <div>
          <label htmlFor="difficulty">Difficulty</label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </select>
        </div>
        {/* Role */}
        <div>
          <label htmlFor="role">Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="Duelist">Duelist</option>
            <option value="Sentinels">Sentinels</option>
            <option value="Controllers">Controllers</option>
            <option value="Initiators">Initiators</option>
          </select>
        </div>
      </form>
      <div className="agentSuggestion">
        <Link to={`agents/${agent.uuid}`}>
          <h2>{agent.displayName}</h2>
          <div className="image-container">
            <img src={agent.fullPortrait} alt="" />
          </div>
        </Link>
      </div>
    </div>
  );
}

export default AgentSelector;
