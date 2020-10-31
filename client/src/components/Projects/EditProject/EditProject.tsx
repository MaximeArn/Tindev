/** @format */

import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import { url } from "../../../environments/api";
import randomId from "../../../utils/randomIdGenerator";
import { EditProjectProps } from "../../../models/projects";
import fieldChecker from "../../../utils/fieldChecker";
import "./editProject.scss";

const EditProject = ({ project }: EditProjectProps) => {
  return (
    <div className="edit-project">
      <form action="" className="edit-form">
        {project &&
          Object.keys(fieldChecker(project)).map((props) => {
            const key = props as keyof typeof EditProject;
            return (
              <div className="field" key={key}>
                <div className="field-text">
                  <div className="field-name">{key}</div>
                  {key === "image" ? (
                    <img src={`${url}/uploads/${project[key]}`} alt="image" />
                  ) : (
                    <div>{project[key]}</div>
                  )}
                </div>
                <i className="field-edit-icon">
                  <EditIcon />
                </i>
              </div>
            );
          })}
      </form>
    </div>
  );
};

export default EditProject;
