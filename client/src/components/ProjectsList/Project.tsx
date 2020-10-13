/** @format */

import React from "react";
import { Project as ProjectModel } from "../../models/projects";

const Project = ({ title, image, description }: ProjectModel) => {
  return (
    <article className="projectCard">
      <div className="projectCard-image">
        <img src={image} alt="" draggable="false" />
      </div>
      <div className="projectCard-text">
        <h2 className="title">{title}</h2>
        <p className="creation">3 weeks ago</p>
        <p className="description">{description}</p>
      </div>
      <footer className="projectCard-footer">
        <div className="footer-likes">
          <p className="counter">124</p>
          <p>likes</p>
        </div>
        <div className="footer-views">
          <p className="counter">9542</p>
          <p>views</p>
        </div>
        <div className="footer-team">
          <p className="counter">4</p>
          <p>people</p>
        </div>
      </footer>
    </article>
  );
};

export default Project;
