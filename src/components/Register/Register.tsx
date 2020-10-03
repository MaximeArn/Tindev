/** @format */
import React, { useRef } from "react";
import Input from "../containers/Input";
import { Authentication } from "../../models/states";
import capitalizeFirstLetter from "../../selectors/capitalizeFirstLetter";
import { Link, useHistory } from "react-router-dom";
import googleIcon from "src/assets/icons/googleIcon.svg";
import "./register.scss";

const Register = ({ register }: Authentication) => {
  const modalContainer = useRef<HTMLDivElement>(null);
  const history = useHistory();

  return (
    <div
      ref={modalContainer}
      className="registerContainer"
      onClick={(e) => {
        e.target === modalContainer.current && history.push("/");
      }}
    >
      <div className="register" id="modal">
        <form method="POST">
          <div className="register-padding">
            <h1>Create Account</h1>
            <div className="fields">
              {Object.keys(register).map((props) => {
                const value = props as keyof typeof register;
                return (
                  <Input
                    key={props}
                    name={props}
                    placeHolder={capitalizeFirstLetter(props)}
                    inputValue={register[value]}
                    formType="Register"
                  />
                );
              })}
            </div>
            <button type="submit" className="submitButton">
              Register
            </button>
          </div>
          <footer>
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
