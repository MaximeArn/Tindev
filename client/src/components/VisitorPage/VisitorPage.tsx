/** @format */

import React from "react";
import "./visitorPage.scss";
import { assets } from "../../../config/paths";
import image from "src/assets/home-image.jpg";

const VisitorPage = () => {
  return (
    <div className="visitor-page">
      <img className="background-image" src={image} alt="oui" />;
    </div>
  );
};

export default VisitorPage;
