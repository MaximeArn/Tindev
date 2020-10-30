import React from "react";
import { UserProps } from "../../../models/users";
import { url } from "../../../environments/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import backgroundImage from "src/assets/user-profile-default.jpg";
import Description from "./Description";
import Experience from "./Experience";
import About from "./About";
import Technos from "./Technos";
import ListItem from "./ListItem";
import list from "../../../utils/userListContent";
import { faCommentAlt, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./userprofile.scss";

const User = ({ username, currentContent, getCurrentContent }: UserProps) => {
  const Content = currentContent;

  return (
    <>
      <div className="user-profile-preview">
        <div className="user-profile-preview-header">
          <div className="user-profile-preview-header-background">
            <img
              className="user-profile-background"
              src={backgroundImage}
              alt="background-image"
            />
            <img
              className="user-profile-image"
              src={`${url}/uploads/users/default-image.jpg`}
            />
          </div>
          <div className="user-profile-preview-header-infos">
            <div className="user-profile-preview-header-username">
              {username}
            </div>
            <div className="user-profile-preview-header-nav">
              <ul className="infos-list">
                {list.map((content) => (
                  <ListItem
                    key={content.name}
                    {...content}
                    getCurrentContent={getCurrentContent}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="user-profile-content">
          {!currentContent ? <Description /> : <Content />}
        </div>

        <div className="user-profile-social">
          <div className="user-profile-icon">
            <i>
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </i>
            <i>
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </i>
            <i>
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </i>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
