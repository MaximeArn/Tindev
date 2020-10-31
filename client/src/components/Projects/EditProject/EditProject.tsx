/** @format */

import React, { useEffect } from "react";
import { EditProjectProps } from "../../../models/projects";
import Field from "./Field";
import fieldChecker from "../../../utils/fieldChecker";
import "./editProject.scss";

const EditProject = ({
  project,
  categories,
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
            return key === "categories" ? (
              <Field
                key={key}
                name={key}
                value={project[key]}
                categories={categories}
              />
            ) : (
              <Field key={key} name={key} value={project[key]} />
            );
          })}
      </div>
    </div>
  );
};

export default EditProject;
