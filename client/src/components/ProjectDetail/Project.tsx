/** @format */
import { Project as ProjectModel, Contributor } from "../../models/projects";
import React from "react";
import { url } from "../../environments/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";

const Project = ({
  title,
  image,
  description,
  contributors,
  author,
}: ProjectModel) => {
  const typedContributors: Contributor[] | [] = contributors;
  const { pathname } = useLocation();

  return (
    <div className="projectDetail">
      <div className="projectDetail-content">
        <div className="image-section">
          <img src={`${url}/uploads/${image}`} alt="project image" />
        </div>
        <div className="title-section">
          <h2>{title}</h2>
          <p>by {author}</p>
        </div>
        <div className="description-section">
          <p>{description}</p>
        </div>
        <div className="contributors-section">
          <div className="row-wrapper">
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
          <button>
            <Link to={`${pathname}/apply`}>Apply</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
