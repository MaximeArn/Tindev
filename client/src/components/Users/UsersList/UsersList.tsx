/** @format */

import React from "react";
import { User, UserState } from "../../../models/users";
import UserCard from "./userCard";

const UsersList = ({ users }: UserState) => {
  console.log("component", users);
  return (
    <div>
      {users.map((user) => (
        <UserCard key={user._id} {...user} />
      ))}
    </div>
  );
};

export default UsersList;
