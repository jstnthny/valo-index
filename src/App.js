import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Maps from "./components/Maps";
import Agents from "./components/Agents";
import MapDetails from "./components/MapDetails";
import AgentDetails from "./components/AgentDetails";
import Home from "./components/Home";
import AgentSelector from "./components/AgentSelector";

function App() {
  return (
    <div className="App">
      {/* Components inbetween router have the ability to use routing*/}
      <Router>
        <Navbar />
        <Switch>
          {/* Renders homepage only if user is exactly on '/' */}
          <Route path="/" exact component={Home} />
          {/* Renders agents component when user is on /agents */}
          <Route path="/agents" exact component={Agents} />
          {/* Renders specfic agent component based on id */}
          <Route path="/agents/:id" component={AgentDetails} />
          <Route path="/maps" exact component={Maps} />
          <Route path="/maps/:id" component={MapDetails} />
          <Route path="/agentSelector" component={AgentSelector} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
