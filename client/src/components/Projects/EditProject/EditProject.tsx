/** @format */

import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import { url } from "../../../environments/api";
import randomId from "../../../utils/randomIdGenerator";
import "./editProject.scss";

const EditProject = ({ project }: any) => {
  console.log(project);
  return (
    <div className="edit-project">
      <form action="" className="edit-form">
        {project &&
          Object.keys(project).map((field: string) => (
            <div className="field" key={randomId()}>
              <div className="field-text">
                <p key={randomId()} className="field-name">
                  {field}:
                </p>
                {field === "image" ? (
                  <img
                    key={randomId()}
                    src={`${url}/uploads/${project[field]}`}
                    alt="image"
                  />
                ) : (
                  <p key={randomId()}>{project[field]}</p>
                )}
              </div>
              <span className="field-edit-icon">
                <EditIcon />
              </span>
            </div>
          ))}
      </form>
    </div>
  );
};

export default EditProject;
