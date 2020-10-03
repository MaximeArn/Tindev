/** @format */

import React, { useRef } from "react";
import capitalizeFirstLetter from "../../selectors/capitalizeFirstLetter";
import RegisterInput from "../Inputs/RegisterInput";
import { Authentication } from "../../models/states";
import { Link, useHistory } from "react-router-dom";
import googleIcon from "src/assets/icons/googleIcon.svg";

const Login = ({ login }: Authentication) => {
  const modalContainer = useRef<HTMLDivElement>(null);
  const history = useHistory();

  return (
    <div
      ref={modalContainer}
      id="registerContainer"
      className="registerContainer"
      onClick={(e) => {
        e.target === modalContainer.current && history.push("/");
      }}
    >
      <div className="register" id="modal">
        <form method="POST">
          <div className="register-padding">
            <h1>Sign In</h1>
            <div className="fields">
              {Object.keys(login).map((props) => {
                const value = props as keyof typeof login;
                return (
                  <RegisterInput
                    key={props}
                    name={props}
                    placeHolder={capitalizeFirstLetter(props)}
                    inputValue={login[value]}
                  />
                );
              })}
            </div>
            <button type="submit" className="submitButton">
              Continue
            </button>
          </div>
          <footer>
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
