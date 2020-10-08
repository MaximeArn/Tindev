/** @format */

import React, { FormEvent, useRef } from "react";
import { Authentication } from "../../models/states";
import { LoginAuth } from "../../models/states";
import { Link, useHistory } from "react-router-dom";
import googleIcon from "src/assets/icons/googleIcon.svg";
import modalClickHandler from "../../selectors/modalClickHandler";
import inputMapper from "../../selectors/inputMapper";

const Login = ({ login, error, submitLogin }: LoginAuth) => {
  const modal = useRef<HTMLDivElement>(null);
  const history = useHistory();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitLogin();
  };

  return (
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
            {error && <span className="register-error-message">{error}</span>}
            <div className="fields">{inputMapper(login)}</div>
            <button type="submit" className="submitButton">
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
  );
};

export default Login;
