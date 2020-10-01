/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.scss";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <ul>
          <div className="links">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </div>
          <div className="authNavLink">
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
