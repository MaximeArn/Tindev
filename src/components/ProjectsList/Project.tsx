/** @format */

import React from "react";
import { ProjectCard } from "../../models/projects";

const Project = ({ title, image, description }: ProjectCard) => {
  return (
    <article className="projectCard">
      <div className="projectCard-image">
        <img src={image} alt="" />
      </div>
      <div className="projectCard-text">
        <p className="creation">3 weeks ago</p>
        <h2 className="title">{title}</h2>
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
