/** @format */

import React from "react";
import { User, UserState } from "../../../models/users";

const UsersList = ({ users }: UserState) => {
  console.log("component", users);
  return (
    <div>
      <p>it works !!</p>
    </div>
  );
};

export default UsersList;
