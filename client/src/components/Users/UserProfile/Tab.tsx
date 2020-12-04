import React from "react";
import { UserTabProps } from "../../../models/users";
import capitalize from "../../../utils/capitalizeFirstLetter";

const Tab = ({ name, selected, setSelectedStatus }: UserTabProps) => {
  return (
    <li
      className={selected === name ? "infos-item selected" : "infos-item"}
      onClick={() => setSelectedStatus(name)}
    >
      {capitalize(name)}
    </li>
  );
};

export default Tab;
