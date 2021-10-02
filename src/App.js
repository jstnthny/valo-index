import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Maps from "./components/Maps";
import Agents from "./components/Agents";
import MapDetails from "./components/MapDetails";
import AgentDetails from "./components/AgentDetails";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/agents" exact component={Agents} />
          <Route path="/agents/:id" component={AgentDetails} />
          <Route path="/maps" exact component={Maps} />
          <Route path="/maps/:id" component={MapDetails} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
