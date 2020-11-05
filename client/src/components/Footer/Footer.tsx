/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/legals">legals</Link>
    </footer>
  );
};

export default Footer;
