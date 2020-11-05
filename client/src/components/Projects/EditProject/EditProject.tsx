/** @format */

import React, { useEffect } from "react";
import { EditProjectProps } from "../../../models/projects";
import Field from "../../containers/ProjectEditField";
import fieldChecker from "../../../utils/fieldChecker";
import "./editProject.scss";

const EditProject = ({
  project,
  projectCreationValues,
  error,
  success,
  getCategories,
  resetSuccessMessage,
  deleteProject,
}: EditProjectProps) => {
  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    setTimeout(() => {
      resetSuccessMessage();
    }, 3000);
  }, [success]);

  return (
    <div className="edit-project-container">
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
                  value={project[key]}
                  inputValue={projectCreationValues[key]}
                />
              );
            })}
        </div>
      </div>
      <button
        onClick={() => deleteProject(project._id)}
        className="edit-project-delete"
      >
        Delete
      </button>
    </div>
  );
};

export default EditProject;
