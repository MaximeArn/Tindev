import React from "react";
import { User } from "../../../models/users";
import "./userprofile.scss";

const User = ({ username }: User) => {
  console.log(username);
  return <div>HELLO HELLO HELLO</div>;
};

export default User;
