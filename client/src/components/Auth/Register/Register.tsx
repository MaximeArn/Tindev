import React, { FormEvent, useRef, useEffect } from "react";
import { RegisterAuth } from "../../../models/states";
import modalClickHandler from "../../../utils/modalClickHandler";
import inputMapper from "../../../utils/inputMapper";
import CircularProgress from "@material-ui/core/CircularProgress";
import GoogleAuthButton from "../../containers/GoogleAuthBtn";
import "../modal.scss";

const Register = ({
  register,
  submitRegister,
  registerLoader,
  closeModal,
  swapModal,
}: RegisterAuth) => {
  const modal = useRef<HTMLDivElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitRegister();
  };

  return (
    <div
      className="modalContainer"
      onMouseDown={({ target }) => modalClickHandler({ target, modal, closeModal })}
    >
      <div className="modal" id="modal" ref={modal}>
        <form method="POST" onSubmit={handleSubmit}>
          <div className="modal-padding">
            <h1 className="modal-title">Create Account</h1>
            <div className="fields">{inputMapper(register)}</div>
            {registerLoader ? (
              <button type="submit" className="submitButton" disabled>
                <div className="loading-button">
                  <p>Loading</p>
                  <CircularProgress size={15} />
                </div>
              </button>
            ) : (
              <button type="submit" className="submitButton">
                Register
              </button>
            )}
          </div>
        </form>
        <footer className="modal-footer">
          <p>
            Already have an Account ?
            <a
              className="auth-modal"
              onClick={() => swapModal({ modal: "register", modal2: "login" })}
            >
              Sign In
            </a>
          </p>

          <div className="form-separator">
            <span>or</span>
          </div>

          <div className="social-media">
            <GoogleAuthButton action="Register" />
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Register;
