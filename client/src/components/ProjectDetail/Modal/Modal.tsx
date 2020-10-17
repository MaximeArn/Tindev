import React, { FormEvent, useRef } from "react";
import Input from "../../containers/Input";
import { ProjectDetailModal } from "../../../models/modal";
import "./modal.scss";

const Modal = ({
  inputValue,
  sendApply,
  setModalStatus,
  resetApplySuccessState,
  error,
  success,
}: ProjectDetailModal) => {
  const modal = useRef<HTMLDivElement>(null);
  const handleMouseDown = (event: any) => {
    event.target === modal.current && setModalStatus(false);
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendApply();
  };

  return (
    <div ref={modal} onMouseDown={handleMouseDown} className="project-detail">
      {!success ? (
        <div className="project-detail-modal">
          <form onSubmit={handleSubmit}>
            <div className="project-detail-padding">
              <h1 className="project-detail-interest">Show your interest</h1>
              {error && <div className="apply-error-message">{error}</div>}
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
      ) : (
        <div className="apply-success">
          <div className="project-detail-padding">
            <div className="apply-success-message">{success}</div>
          </div>
          <button
            className="apply-success-button"
            type="button"
            onClick={() => {
              setModalStatus(false);
              resetApplySuccessState();
            }}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Modal;
