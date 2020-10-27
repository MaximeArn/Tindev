/** @format */

import React from "react";
import "./visitorPage.scss";
import image from "src/assets/home-image.jpg";

const VisitorPage = () => {
  return (
    <div className="visitor-page" style={{ backgroundImage: `url(${image})` }}>
      <div className="text">
        <h2 className="title">welcome to tindev</h2>
        <p className="welcome-text">
          Réseau social permettant de reunir des devs autour d'un projet commun.
          Vous pourrez proposer un projet ou vous joindre au projet d'un autre
          utilisateur. Vous aurez la possibilité de filtrer les recherches selon
          vos critères. Discutez avec les autres utilisateurs via une messagerie
          instantanée et créez des groupes afin de faciliter la communication.
        </p>
      </div>
    </div>
  );
};

export default VisitorPage;
