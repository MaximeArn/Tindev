import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./admin.scss";
import { AdminOverlayProps } from "../../models/states";
import CircularProgress from "@material-ui/core/CircularProgress";
import ConfirmatonModal from "./ConfirmModal";
import Input from "./RadioInput";

const Admin = ({
  id,
  collection,
  error,
  success,
  loader,
  deleteProject,
  modal,
  setModalStatus,
  banUser,
}: AdminOverlayProps) => {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <>
      {modal && (
        <ConfirmatonModal
          deleteProject={deleteProject}
          id={id}
          collection={collection}
          closeModal={() => setModalStatus(false)}
          banUser={banUser}
        />
      )}
      <div className={isPanelOpen ? "admin-overlay open" : "admin-overlay"}>
        <div className="admin-overlay-content">
          <h3>Admin Panel</h3>
          {error && <div className="message-error">{error}</div>}
          {collection === "user" && (
            <form>
              {[12, 24, 48, "permanent"].map((duration) => (
                <Input key={duration} duration={duration} />
              ))}
            </form>
          )}
          <button
            onClick={() => setModalStatus(true)}
            className="admin-overlay-button"
          >
            {loader ? (
              <div className="loading-button">
                <p>Loading</p>
                <CircularProgress size={15} />
              </div>
            ) : (
              "Delete"
            )}
          </button>
          {isPanelOpen && (
            <div className="arrow-close">
              <button
                onClick={() => setIsPanelOpen(!isPanelOpen)}
                className="arrow"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
            </div>
          )}
        </div>
        {!isPanelOpen && (
          <div>
            <button
              onClick={() => setIsPanelOpen(!isPanelOpen)}
              className="arrow"
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Admin;
