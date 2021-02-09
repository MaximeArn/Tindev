import React, { useEffect } from "react";
import { EditProjectProps } from "../../../models/projects";
import Field from "../../containers/ProjectEditField";
import fieldChecker from "../../../utils/fieldChecker";
import Modal from "./Modals/DeletionModal";
import "./editProject.scss";

const EditProject = ({
  project,
  updateProjectValues,
  isModalOpen,
  projectDeletionLoader,
  getProject,
  resetDeletionModal,
  deleteProject,
  setModalStatus,
  projectDeletionSuccess,
}: EditProjectProps) => {
  useEffect(() => {
    getProject();
  }, []);

  return (
    <>
      {isModalOpen && (
        <Modal
          deleteProject={deleteProject}
          projectId={project._id}
          setModalStatus={setModalStatus}
          success={projectDeletionSuccess}
          loader={projectDeletionLoader}
          reset={resetDeletionModal}
        />
      )}
      <div className="edit-project-container">
        <div className="edit-project">
          <div className="edit-form">
            {project &&
              Object.keys(fieldChecker(project)).map((props) => {
                const key = props as keyof typeof EditProject;
                return (
                  !(key === "author" && !project.contributors.length) && (
                    <Field
                      key={key}
                      name={key}
                      projectId={project._id}
                      contributors={project.contributors}
                      value={project[key]}
                      inputValue={updateProjectValues[key]}
                    />
                  )
                );
              })}
          </div>
        </div>
        <button onClick={() => setModalStatus(true)} className="edit-project-delete">
          Delete
        </button>
      </div>
    </>
  );
};

export default EditProject;
