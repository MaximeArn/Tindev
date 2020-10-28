import React from "react";
import { User } from "../../../models/users";
import { url } from "../../../environments/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faCommentAlt, faCommentDots } from "@fortawesome/free-solid-svg-icons";
import backgroundImage from "src/assets/user-profile-default.jpg";
import "./userprofile.scss";

const User = ({ username }: User) => {
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
                <li>Description</li>
                <li>About</li>
                <li>Experience</li>
                <li>Technos</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="user-profile-description">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa laborum
          necessitatibus harum sit voluptate architecto dicta, illo eveniet
          perspiciatis reprehenderit, voluptatum nisi nulla animi a voluptatem
          rem maiores voluptas vero!
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
      {/* <div className="user-profile-introduce">
        <p>AH OKI 2</p>
      </div> */}
    </>
  );
};

export default User;
