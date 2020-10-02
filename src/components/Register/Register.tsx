/** @format */

import React from "react";
import RegisterInput from "../containers/RegisterInput";
import { Authentication } from "../../models/states";
import capitalizeFirstLetter from "../../selectors/capitalizeFirstLetter";
import { Link } from "react-router-dom";
import googleIcon from "./googleIcon.svg";

import "./register.scss";
const Register = ({ register }: Authentication) => {
  return (
    <div className="register">
      <form method="POST">
        <div className="register-padding">
          <h1>Create Account</h1>
          <div className="fields">
            {Object.keys(register).map((props, index) => {
              const value = props as keyof typeof register;
              return (
                <RegisterInput
                  key={index + 1}
                  name={props}
                  placeHolder={capitalizeFirstLetter(props)}
                  inputValue={register[value]}
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
  );
};

export default Register;
