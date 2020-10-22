/** @format */

import React from "react";
import "./userslist.scss";
import { User, UserState } from "../../../models/users";
import UserCard from "./userCard";

const UsersList = ({ users }: UserState) => {
  return (
    <div className="users-list">
      {users.map((user) => (
        <UserCard key={user._id} {...user} />
      ))}
    </div>
  );
};

export default UsersList;
