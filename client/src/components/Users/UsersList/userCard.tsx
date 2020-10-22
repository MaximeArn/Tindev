/** @format */

import React from "react";
import { User } from "../../../models/users";
const userCard = ({ username }: User) => {
  return (
    <div>
      <p>{username}</p>
    </div>
  );
};

export default userCard;
