import React from "react";
import { NavLink, Link } from "react-router-dom";

import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="nav-container">

    <Link to="/" className="nav-text">
        <h3> Rick & Morty WiKi</h3>
    </Link>


    <Link to="/favorites" className="nav-text">
        <h3>Selected Favorite</h3>
    </Link>

</nav>
  );
};

export default Navbar;