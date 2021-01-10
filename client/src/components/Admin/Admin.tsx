import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./admin.scss";
import { AdminOverlayProps } from "../../models/states";

const Admin = ({ id, collection }: AdminOverlayProps) => {
  return (
    <div className="admin-overlay">
      <FontAwesomeIcon
        icon={faTrash}
        onClick={() => console.log("delete !!")}
      />
    </div>
  );
};

export default Admin;
