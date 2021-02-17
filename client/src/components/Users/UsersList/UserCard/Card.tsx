import React, { useEffect, useRef } from "react";
import { User } from "../../../../models/users";
import { Link } from "react-router-dom";
import { url } from "../../../../environments/api";
import getIcon from "../../../../utils/getUserInfosIcons";
import userify from "../../../../utils/whiteSpaceRemover";
import sr, { cardOptions } from "../../../../utils/scrollReveal";
import capitalize from "../../../../utils/capitalizeFirstLetter";

const userCard = ({ username, firstname, lastname, email, city, avatar, age }: User) => {
  const profileCardRef = useRef(null);
  const publicInfos = { email, username, city, age };

  useEffect(() => {
    sr.reveal(profileCardRef.current, cardOptions, 50);
  }, []);

  return (
    <article className="card" ref={profileCardRef}>
      <Link to={`/user/${userify(username)}`} className="user">
        <header className="user-image">
          <div className="background-container">
            <img
              src={avatar.includes("avatar") ? `${url}/uploads/users/${avatar}` : avatar}
              alt="user-image"
              draggable="false"
              className="background-image"
            />
          </div>
          <div className="header-content">
            <img
              src={avatar.includes("avatar") ? `${url}/uploads/users/${avatar}` : avatar}
              alt="user-image"
              draggable="false"
              className="avatar"
            />
            <h2 className="full-name">
              {firstname} {lastname}
            </h2>
          </div>
        </header>
        <div className="user-content">
          {Object.entries(publicInfos).map(([key, value]) => {
            if (value) {
              const Icon = getIcon(key);
              return (
                <div key={key} className="info-row">
                  <p className="info-row-name">
                    <span className="info-row-icon">
                      <Icon style={{ fontSize: 16 }} />
                    </span>
                    {capitalize(key)}
                  </p>
                  <p>{value}</p>
                </div>
              );
            }
          })}
        </div>
      </Link>
    </article>
  );
};

export default userCard;
