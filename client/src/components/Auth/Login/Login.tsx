/** @format */

import React, { FormEvent, MouseEvent, useRef } from "react";
import { LoginAuth } from "../../../models/states";
import { Link } from "react-router-dom";
import googleIcon from "src/assets/icons/googleIcon.svg";
import modalClickHandler from "../../../utils/modalClickHandler";
import inputMapper from "../../../utils/inputMapper";
import "../modal.scss";
import CircularProgress from "@material-ui/core/CircularProgress";

const Login = ({
  login,
  error,
  submitLogin,
  loginLoader,
  closeModal,
  success,
  swapModal,
}: LoginAuth) => {
  const modal = useRef<HTMLDivElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitLogin();
  };

  return (
    <>
      <div
        ref={modal}
        id="registerContainer"
        className="modalContainer"
        onMouseDown={(event) => modalClickHandler({ event, modal, closeModal })}
      >
        <div className="modal" id="modal">
          <form method="POST" onSubmit={handleSubmit}>
            <div className="modal-padding">
              <h1 className="modal-title">Sign In</h1>
              {success && <p className="success-message">{success}</p>}
              {error && <span className="modal-error-message">{error}</span>}
              <div className="fields">{inputMapper(login)}</div>
              {loginLoader ? (
                <button type="submit" className="submitButton" disabled>
                  <div className="loading-button">
                    <p>Loading</p>
                    <CircularProgress size={15} />
                  </div>
                </button>
              ) : (
                <button type="submit" className="submitButton">
                  Continue
                </button>
              )}
            </div>
            <footer className="modal-footer">
              <p>
                Not a member yet ?
                <a
                  className="auth-modal"
                  onClick={() =>
                    swapModal({ modal: "login", modal2: "register" })
                  }
                >
                  Register
                </a>
              </p>

              <div className="form-separator">
                <span>or</span>
              </div>

              <div className="social-media">
                <button className="google-connect">
                  <img src={googleIcon} alt="google icon" />
                  <span>Connect with Google</span>
                </button>
              </div>
            </footer>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
