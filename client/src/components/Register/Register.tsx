/** @format */
import React, { FormEvent, useRef } from "react";
import { Authentication, RegisterAuth } from "../../models/states";
import { Link, useHistory } from "react-router-dom";
import googleIcon from "src/assets/icons/googleIcon.svg";
import modalClickHandler from "../../utils/modalClickHandler";
import inputMapper from "../../utils/inputMapper";
import "./register.scss";

const Register = ({ register, error, submitRegister }: RegisterAuth) => {
  const modal = useRef<HTMLDivElement>(null);
  const history = useHistory();
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitRegister(history);
  };

  const { firstname, lastname, age, city, ...mandatory } = register;
  const fieldValidator = Object.values(mandatory).every((value) => value);

  return (
    <div
      ref={modal}
      className="registerContainer"
      onClick={(event) => modalClickHandler({ event, modal, history })}
    >
      <div className="register" id="modal">
        <form method="POST" onSubmit={handleSubmit}>
          <div className="register-padding">
            <h1>Create Account</h1>
            {error && <span className="register-error-message">{error}</span>}
            <div className="fields">{inputMapper(register)}</div>
            <button
              type="submit"
              className="submitButton"
              disabled={!fieldValidator}
            >
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
