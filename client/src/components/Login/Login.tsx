/** @format */

import React, { FormEvent, useRef } from "react";
import { LoginAuth } from "../../models/states";
import { Link, useHistory, useLocation } from "react-router-dom";
import googleIcon from "src/assets/icons/googleIcon.svg";
import modalClickHandler from "../../utils/modalClickHandler";
import inputMapper from "../../utils/inputMapper";
import "./login.scss";

const Login = ({ login, error, submitLogin }: LoginAuth) => {
  const modal = useRef<HTMLDivElement>(null);
  const history = useHistory();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitLogin(history);
  };

  const fieldValidator = Object.values(login).every((value) => value);

  let registered;
  if (useLocation().state) {
    let {
      state: { msg },
    } = useLocation();

    registered = { message: msg };
  }

  return (
    <>
      <div
        ref={modal}
        id="registerContainer"
        className="registerContainer"
        onClick={(event) => modalClickHandler({ event, modal, history })}
      >
        <div className="register" id="modal">
          <form method="POST" onSubmit={handleSubmit}>
            <div className="register-padding">
              <h1>Sign In</h1>
              {registered && (
                <p className="success-message">{registered.message}</p>
              )}
              {error && <span className="register-error-message">{error}</span>}
              <div className="fields">{inputMapper(login)}</div>
              <button
                type="submit"
                className="submitButton"
                disabled={!fieldValidator}
              >
                Continue
              </button>
            </div>
            <footer className="modal-footer">
              <p>
                Not a member yet ? <Link to="/register">Register</Link>
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
