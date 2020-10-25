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
import "./userprofile.scss";

const User = ({ username }: User) => {
  console.log(username);
  return (
    <>
      <div className="user-profile-preview">
        <i>
          <FontAwesomeIcon className="chat" icon={faCommentAlt} size="lg" />
        </i>
        <div className="user-profile-preview-header">
          <img src={`${url}/uploads/users/default-image.jpg`} />
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
