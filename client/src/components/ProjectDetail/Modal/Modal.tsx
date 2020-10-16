import React from "react";
import Input from "../../containers/Input";
import { ProjectDetailModal } from "../../../models/modal";
import "./modal.scss";

const Modal = ({ inputValue }: ProjectDetailModal) => {
  return (
    <div className="project-detail">
      <div className="project-detail-modal">
        <form>
          <div className="project-detail-padding">
            <h1 className="project-detail-interest">Show your interest</h1>
            <Input
              name="description"
              formType="ProjectDetail"
              inputValue={inputValue}
            />
          </div>
          <button className="project-detail-submit" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
