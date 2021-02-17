import React, { useEffect } from "react";
import "./userslist.scss";
import { UserListProps } from "../../../models/users";
import UserCard from "./UserCard/Card";

const UsersList = ({ users, getUsers }: UserListProps) => {
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="users-list">
      {users && users.map((user) => <UserCard key={user._id} {...user} />)}
    </div>
  );
};

export default UsersList;
