/** @format */

import React from "react";
import slugifier from "../../utils/slugify";
import shortify from "../../utils/shortifyString";
import { Project as ProjectModel } from "../../models/projects";

const Project = ({ title, image, description }: ProjectModel) => {
  return (
    <article>
      <a href={`/project/${slugifier(title)}`} className="projectCard">
        <div className="projectCard-image">
          <img src={image} alt="" draggable="false" />
        </div>
        <div className="projectCard-text">
          <h2 className="title">{title}</h2>
          <p className="creation">3 weeks ago</p>
          <p className="description">{shortify(description)}</p>
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
      </a>
    </article>
  );
};

export default Project;
