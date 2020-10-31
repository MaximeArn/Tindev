/** @format */

import React from "react";
import { EditProjectProps } from "../../../models/projects";
import Field from "./Field";
import fieldChecker from "../../../utils/fieldChecker";
import "./editProject.scss";

const EditProject = ({ project }: EditProjectProps) => {
  return (
    <div className="edit-project">
      <form action="" className="edit-form">
        {project &&
          Object.keys(fieldChecker(project)).map((props) => {
            const key = props as keyof typeof EditProject;
            return <Field key={key} name={key} value={project[key]} />;
          })}
      </form>
    </div>
  );
};

export default EditProject;
