import React from "react";
import { User } from "../../../models/users";
import { url } from "../../../environments/api";
import "./userprofile.scss";

const User = ({ username }: User) => {
  console.log(username);
  return (
    <>
      <div className="user-profile-preview">
        <div className="user-profile-preview-header">
          <img src={`${url}/uploads/users/default-image.jpg`} />
        </div>

        <div>
          <p className="user-profile-description">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
            laborum necessitatibus harum sit voluptate architecto dicta, illo
            eveniet perspiciatis reprehenderit, voluptatum nisi nulla animi a
            voluptatem rem maiores voluptas vero!
          </p>
        </div>
      </div>
      {/* <div className="user-profile-introduce">
        <p>AH OKI 2</p>
      </div> */}
    </>
  );
};

export default User;
