import React, { useEffect, useRef } from "react";
import { User } from "../../../models/users";
import { Link } from "react-router-dom";
import { url } from "../../../environments/api";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import LocationCityOutlinedIcon from "@material-ui/icons/LocationCityOutlined";
import userify from "../../../utils/whiteSpaceRemover";
import sr, { cardOptions } from "../../../utils/scrollReveal";

const userCard = ({ username, firstname, lastname, email, city, avatar }: User) => {
  const profileCardRef = useRef(null);

  useEffect(() => {
    sr.reveal(profileCardRef.current, cardOptions, 50);
  }, []);

  return (
    <article className="card" ref={profileCardRef}>
      <Link to={`/user/${userify(username)}`} className="user">
        <header className="user-image">
          <div className="background-container">
            <img
              src={`${url}/uploads/users/${avatar}`}
              alt="user-image"
              draggable="false"
              className="background-image"
            />
          </div>
          <div className="header-content">
            <img
              src={`${url}/uploads/users/${avatar}`}
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
          <div className="info-row">
            <p className="info-row-name">
              <span>
                <MailOutlineOutlinedIcon style={{ fontSize: 16 }} />
              </span>
              E-mail :
            </p>
            <p>{email}</p>
          </div>
          <div className="info-row">
            <p className="info-row-name">
              <span>
                <PermIdentityOutlinedIcon style={{ fontSize: 16 }} />
              </span>
              User name :
            </p>
            <p>{username}</p>
          </div>
          <div className="info-row">
            <p className="info-row-name">
              <span>
                <LocationCityOutlinedIcon style={{ fontSize: 16 }} />
              </span>
              City :
            </p>
            <p>{city}</p>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default userCard;
