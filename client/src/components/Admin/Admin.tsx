import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./admin.scss";
import { AdminOverlayProps } from "../../models/states";

const Admin = ({ id, collection }: AdminOverlayProps) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <div className={isPanelOpen ? "admin-overlay open" : "admin-overlay"}>
      <div className="admin-overlay-content">
        <h3>Admin Panel</h3>
        <button onClick={() => console.log("delete !!")}>
          <FontAwesomeIcon icon={faTrash} color="red" />
        </button>
        {isPanelOpen && (
          <div className="arrow-close">
            <button onClick={() => setIsPanelOpen(!isPanelOpen)}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
          </div>
        )}
      </div>
      {!isPanelOpen && (
        <div>
          <button onClick={() => setIsPanelOpen(!isPanelOpen)}>
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      )}
    </div>
  );
};

export default Admin;
