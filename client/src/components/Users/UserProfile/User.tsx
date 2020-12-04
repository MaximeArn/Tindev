import React, { useState } from "react";
import { UserProps } from "../../../models/users";
import { url } from "../../../environments/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import backgroundImage from "src/assets/user-profile-default.jpg";
import Tab from "./Tab";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./userprofile.scss";

const User = ({ _id, username, infos, openChatWindow }: UserProps) => {
  const [selected, setSelectedStatus] = useState<string>("about");

  console.log("SELECTED : ", selected);

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
          </div>
          <img
            className="user-profile-image"
            src={`${url}/uploads/users/default-image.jpg`}
          />
          <div className="user-profile-preview-header-infos">
            <i
              onClick={() => openChatWindow(username, _id)}
              className="chatIcon"
            >
              <ChatBubbleIcon style={{ fontSize: "1.5em" }} />
            </i>
            <div className="user-profile-preview-header-username">
              {username}
            </div>
            <div className="user-profile-preview-header-nav">
              <ul className="infos-list">
                {infos.map(({ name, value }) => (
                  <Tab
                    key={name}
                    name={name}
                    content={value}
                    selected={selected}
                    setSelectedStatus={setSelectedStatus}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="user-profile-content">
          {/* {!currentContent ? <Description /> : <Content />} */}
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
