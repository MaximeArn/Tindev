/** @format */

import React from "react";
import { User } from "../../../models/users";
import { Link } from "react-router-dom";
import { url } from "../../../environments/api";
const userCard = ({
  username,
  firstname,
  lastname,
  email,
  age,
  city,
}: User) => {
  return (
    <article className="card">
      <Link to={`/user/${username}`} className="user">
        <header className="user-image">
          <div className="background-container">
            <img
              src={`${url}/uploads/users/default-image.jpg`}
              alt="user-image"
              draggable="false"
              className="background-image"
            />
          </div>
          <div className="avatar-container">
            <img
              src={`${url}/uploads/users/default-image.jpg`}
              alt="user-image"
              draggable="false"
              className="avatar"
            />
          </div>
        </header>
        <div className="user-content">
          <h2 className="user-username">{username}</h2>
          <p className="user-email">{email}</p>
          {firstname && <p className="user-firstname">{firstname}</p>}
          {lastname && <p className="user-lastname">{lastname}</p>}
          {age && <p className="user-age">{age} years old</p>}
          {city && <p className="user-city">{city}</p>}
        </div>
      </Link>
    </article>
  );
};

export default userCard;
