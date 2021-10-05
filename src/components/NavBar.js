import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWdith = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWdith);
    return () => {
      window.removeEventListener("resize", changeWdith);
    };
  }, []);

  return (
    <nav className="navbar">
      <svg
        onClick={toggleNav}
        className="navBtn bi bi-list"
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
      <h1>
        <Link to="/">Valo Index</Link>
      </h1>

      {(toggleMenu || screenWidth > 810) && (
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/Agents">
            <li>Agents</li>
          </Link>
          <Link to="/Maps">
            <li>Maps</li>
          </Link>
          <Link to="/AgentSelector">
            <li>Agent Selector</li>
          </Link>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
