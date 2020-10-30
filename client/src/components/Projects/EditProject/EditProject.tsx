/** @format */

import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import { url } from "../../../environments/api";
import randomId from "../../../utils/randomIdGenerator";
import "./editProject.scss";

const EditProject = ({ project }: any) => {
  const { _id, author, applicants, contributors, __v, ...editable } = project;
  return (
    <div className="edit-project">
      <form action="" className="edit-form">
        {project &&
          Object.keys(editable).map((key) => (
            <div className="field" key={key}>
              <div className="field-text">
                <div className="field-name">{key}</div>
                {key === "image" ? (
                  <img
                    key={randomId()}
                    src={`${url}/uploads/${project[key]}`}
                    alt="image"
                  />
                ) : (
                  <div key={randomId()}>{project[key]}</div>
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
