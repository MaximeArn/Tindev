/** @format */

import React, { useEffect } from "react";
import { EditProjectProps } from "../../../models/projects";
import Field from "../../containers/ProjectEditField";
import fieldChecker from "../../../utils/fieldChecker";
import Modal from "./Modal";
import { successToast, errorToast } from "../../../utils/toastify";
import "./editProject.scss";

const EditProject = ({
  project,
  projectCreationValues,
  error,
  success,
  resetSuccessMessage,
  isModalOpen,
  deleteProject,
  setModalStatus,
  projectDeletionSuccess,
  resetErrorMessage,
}: EditProjectProps) => {
  useEffect(() => {
    (success || projectDeletionSuccess) &&
      (() => {
        successToast(success);
        resetSuccessMessage();
      })();
    error &&
      (() => {
        errorToast(error);
        resetErrorMessage();
      })();
  }, [success, error]);

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
                    value={project[key]}
                    inputValue={projectCreationValues[key]}
                  />
                );
              })}
          </div>
        </div>
        <button
          onClick={() => setModalStatus(true)}
          className="edit-project-delete"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default EditProject;
