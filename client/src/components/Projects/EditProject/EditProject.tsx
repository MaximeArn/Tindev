/** @format */

import React, { useEffect } from "react";
import { EditProjectProps } from "../../../models/projects";
import Field from "../../containers/ProjectEditField";
import fieldChecker from "../../../utils/fieldChecker";
import "./editProject.scss";

const EditProject = ({
  project,
  projectCreationValues,
  getCategories,
}: EditProjectProps) => {
  useEffect(() => {
    getCategories();
  }, []);
  return (
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
  );
};

export default EditProject;
