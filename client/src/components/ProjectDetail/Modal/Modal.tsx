import React from "react";
import Input from "../../Input/Input";
import "./modal.scss";

const Modal = () => {
  return (
    <div className="project-detail-modal">
      <form>
        <div className="project-detail-padding">
          <h1 className="project-detail-interest">Show your interest</h1>
          <input
            className="project-detail-description"
            name="description"
            type="textarea"
          />
        </div>
        <button className="project-detail-submit" type="submit">
          Send
        </button>
      </form>
    </div>
  );
};

export default Modal;
