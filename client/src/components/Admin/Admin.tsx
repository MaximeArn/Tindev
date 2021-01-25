import React, { useState, useEffect } from "react";
import { errorToast, successToast } from "../../utils/toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./admin.scss";
import { AdminOverlayProps } from "../../models/states";
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
  useEffect(() => {
    error && errorToast(error);
    success && successToast(success);
  }, [error, success]);

  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [duration, setDuration] = useState(null);

  return (
    <>
      {modal && (
        <ConfirmatonModal
          deleteProject={deleteProject}
          id={id}
          collection={collection}
          closeModal={() => setModalStatus(false)}
          banUser={banUser}
          duration={duration}
          loader={loader}
        />
      )}
      <div className={isPanelOpen ? "admin-overlay open" : "admin-overlay"}>
        <div className="admin-overlay-content">
          <h3>Admin Panel</h3>
          {collection === "user" && (
            <form>
              {[12, 24, 48, "permanent"].map((duration) => (
                <Input
                  key={duration}
                  duration={duration}
                  setDuration={setDuration}
                />
              ))}
            </form>
          )}
          <button
            onClick={() => setModalStatus(true)}
            className="admin-overlay-button"
          >
            {collection === "project" ? "Delete" : "Ban"}
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
