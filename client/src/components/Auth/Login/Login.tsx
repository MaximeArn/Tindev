import React, { FormEvent, MouseEvent, useRef, useEffect } from "react";
import { LoginAuth } from "../../../models/states";
import googleIcon from "src/assets/icons/googleIcon.svg";
import modalClickHandler from "../../../utils/modalClickHandler";
import inputMapper from "../../../utils/inputMapper";
import "../modal.scss";
import CircularProgress from "@material-ui/core/CircularProgress";
import GoogleAuthButton from "../Google/AuthBtn";

const Login = ({
  login,
  error: { userId },
  submitLogin,
  loginLoader,
  newLinkLoader,
  closeModal,
  sendActivationLink,
  swapModal,
  setForgotPasswordModalStatus,
}: LoginAuth) => {
  const modal = useRef<HTMLDivElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitLogin();
  };

  return (
    <>
      <div
        id="registerContainer"
        className="modalContainer"
        onMouseDown={({ target }) => modalClickHandler({ target, modal, closeModal })}
      >
        <div className="modal" id="modal" ref={modal}>
          <form method="POST" onSubmit={handleSubmit}>
            <div className="modal-padding">
              <h1 className="modal-title">Sign In</h1>
              <>
                {userId && (
                  <>
                    <div className="modal-error-activationLink">
                      Didn't receive any email ?
                    </div>
                    <button
                      className="modal-error-newLink"
                      onClick={() => sendActivationLink(userId)}
                      disabled={newLinkLoader}
                    >
                      {newLinkLoader ? (
                        <div className="loading-button">
                          <p>Loading</p>
                          <CircularProgress size={15} />
                        </div>
                      ) : (
                        "Send a new link"
                      )}
                    </button>
                  </>
                )}
              </>
              <div className="fields">{inputMapper(login)}</div>
              {loginLoader ? (
                <button type="submit" className="submitButton" disabled>
                  <div className="loading-button">
                    <p>Loading</p>
                    <CircularProgress size={15} />
                  </div>
                </button>
              ) : (
                <button type="submit" className="submitButton" disabled={loginLoader}>
                  Continue
                </button>
              )}
            </div>
            <footer className="modal-footer">
              <p>
                Forgot password ?
                <span
                  className="modal-forgot-password"
                  onClick={() => setForgotPasswordModalStatus(true)}
                >
                  Click here
                </span>
              </p>
              <p>
                Not a member yet ?
                <a
                  className="auth-modal"
                  onClick={() => swapModal({ modal: "login", modal2: "register" })}
                >
                  Register
                </a>
              </p>

              <div className="form-separator">
                <span>or</span>
              </div>

              <div className="social-media">
                <GoogleAuthButton action="Login" />
                {/* <button className="google-connect">
                  <img src={googleIcon} alt="google icon" />
                  <span>Connect with Google</span>
                </button> */}
              </div>
            </footer>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
