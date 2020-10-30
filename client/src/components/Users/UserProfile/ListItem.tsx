import React from "react";

const ListItem = ({ name, component, getCurrentContent }: any) => {
  return (
    <li className="infos-item" onClick={() => getCurrentContent(component)}>
      {name}
    </li>
  );
};

export default ListItem;
