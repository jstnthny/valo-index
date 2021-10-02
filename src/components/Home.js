import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <div className="home">
        <h1 className="srOnly">Valo Index</h1>
        <Link to="/Agents">Agents</Link>
        <Link to="/Maps">Maps</Link>
      </div>
    </>
  );
}

export default Home;
