import React, { useEffect, useRef } from "react";
import { DeleteProjectModalProps } from "../../../../models/projects";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory } from "react-router-dom";

const Modal = ({
  deleteProject,
  projectId,
  setModalStatus,
  loader,
  reset,
  success,
}: DeleteProjectModalProps) => {
  const modalContainer = useRef<any[]>([]);
  const history = useHistory();

  useEffect(() => {
    return () => reset();
  }, []);

  useEffect(() => {
    document.removeEventListener("click", handleClick);
    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [success]);

  const handleClick = ({ target }: MouseEvent) => {
    if (modalContainer.current.every((ref) => !ref.contains(target))) {
      setModalStatus(false);
      success && history.push("/");
    }
  };

  return (
    <>
      <div className="decline">
        <div
          ref={(ref) =>
            modalContainer.current.length < 2 && modalContainer.current.push(ref)
          }
          className="decline-applicant"
        >
          {success ? (
            <>
              <div className="project-detail-padding">
                <div className="apply-success-message">{success}</div>
              </div>
              <button
                onClick={() => {
                  setModalStatus(false);
                  history.push("/");
                }}
                className="apply-success-button"
                type="button"
              >
                Close
              </button>
            </>
          ) : (
            <>
              <div className="project-detail-padding">
                <div className="decline-applicant-message">
                  Are you sure to delete this project ?
                </div>
              </div>
              <div className="decline-applicant-buttons">
                {loader ? (
                  <div className="project-deletion-loader">
                    <p>Loading</p>
                    <CircularProgress size={15} />
                  </div>
                ) : (
                  <>
                    <button
                      ref={(ref) =>
                        modalContainer.current.length < 2 &&
                        modalContainer.current.push(ref)
                      }
                      onClick={() => deleteProject(projectId)}
                      className="decline-applicant-button"
                      type="button"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setModalStatus(false)}
                      className="decline-applicant-button"
                      type="button"
                    >
                      No
                    </button>
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Modal;
