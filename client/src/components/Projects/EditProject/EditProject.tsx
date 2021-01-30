import React, { useEffect } from "react";
import { EditProjectProps } from "../../../models/projects";
import Field from "../../containers/ProjectEditField";
import fieldChecker from "../../../utils/fieldChecker";
import Modal from "./Modals/DeletionModal";
import "./editProject.scss";

const EditProject = ({
  project,
  updateProjectValues,
  error,
  projectDetailsErrorMessage,
  success,
  isModalOpen,
  resetSuccessMessage,
  getProject,
  deleteProject,
  setModalStatus,
  projectDeletionSuccess,
}: EditProjectProps) => {
  useEffect(() => {
    getProject();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      resetSuccessMessage();
    }, 3000);
  }, [success]);

  return (
    <>
      {isModalOpen && (
        <Modal
          deleteProject={deleteProject}
          projectId={project._id}
          setModalStatus={setModalStatus}
          success={projectDeletionSuccess}
        />
      )}
      <div className="edit-project-container">
        {projectDetailsErrorMessage ? (
          <div className="edit-project-fetching-error-message">
            {projectDetailsErrorMessage}
          </div>
        ) : (
          <>
            {error && <div className="edit-project-error-message">{error}</div>}
            {success && <div className="edit-project-success-message">{success}</div>}
            <div className="edit-project">
              <div className="edit-form">
                {project &&
                  Object.keys(fieldChecker(project)).map((props) => {
                    const key = props as keyof typeof EditProject;
                    return (
                      <Field
                        key={key}
                        name={key}
                        projectId={project._id}
                        contributors={project.contributors}
                        value={project[key]}
                        inputValue={updateProjectValues[key]}
                      />
                    );
                  })}
              </div>
            </div>
            <button onClick={() => setModalStatus(true)} className="edit-project-delete">
              Delete
            </button>
          </>
        )}
      </div>
    </>
  );
};

export default EditProject;
