/** @format */

import React from "react";
import { NavLink } from "react-router-dom";
import { Authentication } from "../../models/states";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import "./navBar.scss";

const NavBar = ({ user }: Authentication) => {
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
                      strokeWidth="1"
                      d="M0,12 L7.5,0 L15,12"
                    ></path>
                    <polygon
                      fill="#474747"
                      strokeWidth="0"
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
              {!user ? (
                <>
                  <li className="nav-item">
                    <NavLink to="/login">Login</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/register">Register</NavLink>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <NavLink to="/account">
                      <FontAwesomeIcon icon={faUserCircle} />
                      <span className="user">{user.username}</span>
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to="/logout">Logout</NavLink>
                  </li>
                </>
              )}
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
