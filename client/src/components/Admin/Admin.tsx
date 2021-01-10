import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./admin.scss";
import { AdminOverlayProps } from "../../models/states";

const Admin = ({ id, collection }: AdminOverlayProps) => {
  return (
    <div className="admin-overlay">
      <button onClick={() => console.log("delete !!")}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default Admin;
