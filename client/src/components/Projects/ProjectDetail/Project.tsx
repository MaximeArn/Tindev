/** @format */
import {
  Project as ProjectModel,
  Contributor,
  ProjectDetailSubComponent,
} from "../../../models/projects";
import React from "react";
import { url } from "../../../environments/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { Link, useLocation } from "react-router-dom";
import userify from "../../../utils/whiteSpaceRemover";
import idGenerator from "../../../utils/randomIdGenerator";
import CircularProgress from "@material-ui/core/CircularProgress";

const Project = ({
  _id,
  title,
  image,
  description,
  contributors,
  categories,
  author,
  setModalStatus,
  owner,
  contributing,
  contributorLoader,
  leaveProject,
}: ProjectDetailSubComponent) => {
  console.log("LOADER : ", contributorLoader);
  const typedContributors: Contributor[] | [] = contributors;
  const { pathname } = useLocation();
  return (
    <>
      {author && (
        <div className="projectDetail">
          <div className="projectDetail-content">
            <div className="image-section">
              <img src={`${url}/uploads/${image}`} alt="project image" />
            </div>
            <div className="title-section">
              <h2>{title}</h2>
              <Link to={`/user/${userify(author)}`}>
                <p>by {author}</p>
              </Link>
            </div>
            <div className="description-section">
              <p>{description}</p>
            </div>
            <div className="contributors-section">
              <div className="row-wrapper">
                {contributorLoader ? (
                  <div className="loader">
                    <p>Loading</p>
                    <CircularProgress size={15} />
                  </div>
                ) : typedContributors.length ? (
                  typedContributors.map(({ username, _id }: Contributor) => (
                    <div key={_id} className="contributor-row">
                      <span>
                        <FontAwesomeIcon icon={faUserCircle} size="lg" />
                      </span>
                      <Link to={`/user/${userify(username)}`}>{username}</Link>
                    </div>
                  ))
                ) : (
                  <p>No contributors yet</p>
                )}
              </div>
            </div>
            <div className="categories-section">
              {categories.map((name) => (
                <div key={idGenerator()} className="category">
                  {name}
                </div>
              ))}
            </div>
            <div className="buttons-section">
              {owner ? (
                <>
                  <Link to={`${pathname}/edit`}>
                    <button className="edit-button">Edit</button>
                  </Link>
                  <Link to={`${pathname}/manage`}>
                    <button className="manage-button">Manage</button>
                  </Link>
                </>
              ) : contributing ? (
                <>
                  <button className="edit-button">Like</button>
                  <button
                    onClick={() => leaveProject(_id)}
                    className="manage-button"
                  >
                    Leave
                  </button>
                </>
              ) : (
                <>
                  <button className="like-button">Like</button>
                  <button
                    onClick={() => setModalStatus(true)}
                    className="apply-button"
                  >
                    Apply
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
