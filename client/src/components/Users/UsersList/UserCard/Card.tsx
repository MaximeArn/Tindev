import React, { useEffect, useRef } from "react";
import { User } from "../../../../models/users";
import { Link } from "react-router-dom";
import idGenerator from "../../../../utils/randomIdGenerator";
import getIcon from "../../../../utils/getUserInfosIcons";
import userify from "../../../../utils/whiteSpaceRemover";
import sr, { cardOptions } from "../../../../utils/scrollReveal";
import CardImage from "./CardImage";
import capitalize from "../../../../utils/capitalizeFirstLetter";

const userCard = ({ username, firstname, lastname, email, city, avatar, age }: User) => {
  const profileCardRef = useRef(null);
  const publicInfos = { email, username, city, age };
  const images = [
    { containerClassName: "background-container", imgClassName: "background-image" },
    { containerClassName: "header-content", imgClassName: "avatar", firstname, lastname },
  ];

  useEffect(() => {
    sr.reveal(profileCardRef.current, cardOptions, 50);
  }, []);

  return (
    <article className="card" ref={profileCardRef}>
      <Link to={`/user/${userify(username)}`} className="user">
        <header className="user-image">
          {images.map((imageData) => (
            <CardImage key={idGenerator()} {...imageData} avatar={avatar} />
          ))}
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
