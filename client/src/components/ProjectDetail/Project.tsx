/** @format */
import {
  Project as ProjectModel,
  Contributor,
  ProjectDetailSubComponent,
} from "../../models/projects";
import React from "react";
import { url } from "../../environments/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
const Project = ({
  title,
  image,
  description,
  contributors,
  author,
  setModalStatus,
}: ProjectDetailSubComponent) => {
  const typedContributors: Contributor[] | [] = contributors;
  return (
    <div className="projectDetail">
      <div className="projectDetail-content">
        <img src={`${url}/uploads/${image}`} alt="project image" />
        <div className="title-section">
          <h2>{title}</h2>
          <p>by {author}</p>
        </div>
        <div className="description-section">
          <p>{description}</p>
        </div>
        <div className="contributors-section">
          <div className="test">
            {typedContributors.map(({ name }: Contributor) => (
              <div className="contributor-row">
                <span>
                  <FontAwesomeIcon icon={faUserCircle} size="lg" />
                </span>
                <p>{name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="buttons-section">
          <button>Like</button>
          <button onClick={() => setModalStatus(true)}>Apply</button>
        </div>
      </div>
    </div>
  );
};

export default Project;
