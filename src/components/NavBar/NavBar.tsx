/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import "./navBar.scss";

const NavBar = () => {
  return (
    <>
      <div>
        <nav className="navbar">
          <ul className="nav-list">
            <div className="links">
              <li className="nav-item">
                <NavLink to="/" exact>
                  Home
                </NavLink>
              </li>
              <li className="dropdown">
                <span>Dropdown</span>

                <div className="dropdown-content">
                  <svg className="dropdown-arrow">
                    <path
                      stroke="rgba(179, 187, 193, 0.25)"
                      stroke-width="1"
                      d="M0,12 L7.5,0 L15,12"
                    ></path>
                    <polygon
                      fill="#474747"
                      stroke-width="0"
                      points="7.5,0 15,12 0,12"
                    ></polygon>
                  </svg>
                  <div className="dropdown-list">
                    <a href="#">LINK 1</a>
                    <a href="#">LINK 2</a>
                    <a href="#">LINK 3</a>
                  </div>
                </div>
              </li>
            </div>

            <div className="authNavLink">
              <li className="nav-item">
                <NavLink to="/login">Login</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/register">Register</NavLink>
              </li>
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
