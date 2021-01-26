import React, { FormEvent, MouseEvent, useRef } from "react";
import { LoginAuth } from "../../../models/states";
import googleIcon from "src/assets/icons/googleIcon.svg";
import modalClickHandler from "../../../utils/modalClickHandler";
import inputMapper from "../../../utils/inputMapper";
import "../modal.scss";
import CircularProgress from "@material-ui/core/CircularProgress";

const Login = ({
  login,
  error: { msg: errorMessage, userId },
  submitLogin,
  loginLoader,
  newLinkLoader,
  closeModal,
  registerSuccess,
  newLinkSuccess,
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
        onMouseDown={({ target }) =>
          modalClickHandler({ target, modal, closeModal })
        }
      >
        <div className="modal" id="modal" ref={modal}>
          <form method="POST" onSubmit={handleSubmit}>
            <div className="modal-padding">
              <h1 className="modal-title">Sign In</h1>
              {registerSuccess && (
                <p className="success-message">{registerSuccess}</p>
              )}
              {errorMessage && (
                <>
                  <span className="modal-error-message">{errorMessage}</span>
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
              )}
              {newLinkSuccess && (
                <p className="success-message">{newLinkSuccess}</p>
              )}
              <div className="fields">{inputMapper(login)}</div>
              {loginLoader ? (
                <button type="submit" className="submitButton" disabled>
                  <div className="loading-button">
                    <p>Loading</p>
                    <CircularProgress size={15} />
                  </div>
                </button>
              ) : (
                <button
                  type="submit"
                  className="submitButton"
                  disabled={loginLoader}
                >
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
