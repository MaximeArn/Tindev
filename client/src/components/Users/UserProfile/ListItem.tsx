import React from "react";

const ListItem = ({
  name,
  component,
  selected,
  getCurrentContent,
  setSelectedStatus,
}: any) => {
  const handleClick = () => {
    setSelectedStatus(name);
    getCurrentContent(component);
  };

  return (
    <li
      className={!selected ? "infos-item" : "infos-item selected"}
      onClick={handleClick}
    >
      {name}
    </li>
  );
};

export default ListItem;
