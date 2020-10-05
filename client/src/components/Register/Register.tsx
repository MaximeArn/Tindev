/** @format */
import React, { useRef } from "react";
import { Authentication } from "../../models/states";
import { Link, useHistory } from "react-router-dom";
import googleIcon from "src/assets/icons/googleIcon.svg";
import modalClickHandler from "../../selectors/modalClickHandler";
import inputMapper from "../../selectors/inputMapper";
import "./register.scss";

const Register = ({ register }: Authentication) => {
  const modal = useRef<HTMLDivElement>(null);
  const history = useHistory();

  return (
    <div
      ref={modal}
      className="registerContainer"
      onClick={(event) => modalClickHandler({ event, modal, history })}
    >
      <div className="register" id="modal">
        <form method="POST">
          <div className="register-padding">
            <h1>Create Account</h1>
            <div className="fields">{inputMapper(register)}</div>
            <button type="submit" className="submitButton">
              Register
            </button>
          </div>
          <footer className="modal-footer">
            <p>
              Already have an Account ? <Link to="/login">Sign In</Link>
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

export default Register;
