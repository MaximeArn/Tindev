import React, { useState } from "react";
import { UserProfileInfos, UserProps } from "../../../models/users";
import { url } from "../../../environments/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tab from "./Tab";
import TabPanel from "./TabPanel";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";
import "./userprofile.scss";

const User = ({
  _id,
  username,
  avatar,
  background_image,
  infos,
  openChatWindow,
}: UserProps) => {
  const [selected, setSelectedStatus] = useState<string>("about");

  return (
    <>
      <div className="user-profile-preview">
        <div className="user-profile-preview-header">
          <div className="user-profile-preview-header-background">
            <img
              className="user-profile-background"
              src={`${url}/uploads/users/${background_image}`}
              alt="background-image"
            />
          </div>
          <img
            className="user-profile-image"
            src={avatar.includes("avatar") ? `${url}/uploads/users/${avatar}` : avatar}
          />
          <div className="user-profile-preview-header-infos">
            <i onClick={() => openChatWindow(username, _id)} className="chatIcon">
              <ChatBubbleIcon style={{ fontSize: "1.5em" }} />
            </i>
            <div className="user-profile-preview-header-username">{username}</div>
            <div className="user-profile-preview-header-nav">
              <ul className="infos-list">
                {Object.keys(infos).map((key) => (
                  <Tab
                    key={key}
                    name={key}
                    selected={selected}
                    setSelectedStatus={setSelectedStatus}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="user-profile-content">
          <TabPanel value={infos[selected as keyof UserProfileInfos]} />
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
