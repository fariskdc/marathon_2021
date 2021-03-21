import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <nav>
        <ul>
          <li>Home</li>
          <li>Index</li>
          <li>Prijava Ispita</li>
          <li className="about">Racun</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
