import React, { FormEvent, useRef, useEffect } from "react";
import Input from "../../../containers/Input";
import { ProjectDetailModal } from "../../../../models/modal";
import "./modal.scss";
import { errorToast } from "../../../../utils/toastify";

const Modal = ({
  inputValue,
  sendApply,
  setModalStatus,
  reset,
  error,
  success,
}: ProjectDetailModal) => {
  const modal = useRef<HTMLDivElement>(null);

  useEffect(() => {
    error && errorToast(error);
  }, [error]);

  const handleOutsideClick = (event: any) => {
    if (event.target === modal.current) {
      setModalStatus(false);
      reset();
    }
  };
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendApply();
  };

  return (
    <div
      ref={modal}
      onMouseDown={handleOutsideClick}
      className="project-detail"
    >
      {!success ? (
        <div className="project-detail-modal">
          <form onSubmit={handleSubmit}>
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
              reset();
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
