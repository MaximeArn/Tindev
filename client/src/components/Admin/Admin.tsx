import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./admin.scss";

const Admin = () => {
  return (
    <div className="admin">
      <FontAwesomeIcon icon={faTrash} />
    </div>
  );
};

export default Admin;
