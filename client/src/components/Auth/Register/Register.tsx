/** @format */
import React, { FormEvent, useRef } from "react";
import { RegisterAuth } from "../../../models/states";
import googleIcon from "src/assets/icons/googleIcon.svg";
import modalClickHandler from "../../../utils/modalClickHandler";
import inputMapper from "../../../utils/inputMapper";
import "../modal.scss";
import CircularProgress from "@material-ui/core/CircularProgress";
import { GoogleLogin } from 'react-google-login';
 
const Register = ({
  register,
  error,
  submitRegister,
  registerLoader,
  closeModal,
  swapModal,
}: RegisterAuth) => {
  const { firstname, lastname, age, city, ...mandatory } = register;
  const modal = useRef<HTMLDivElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitRegister();
  };

  return (
    <div
      ref={modal}
      className="modalContainer"
      onMouseDown={(event) => modalClickHandler({ event, modal, closeModal })}
    >
      <div className="modal" id="modal">
          <div className="modal-padding">
            <h1 className="modal-title">Create Account</h1>
            {error && <span className="modal-error-message">{error}</span>}
            <div className="fields">{inputMapper(register, mandatory)}</div>
        <form method="POST" onSubmit={handleSubmit}>
            {registerLoader ? (
              <button type="submit" className="submitButton" disabled>
                <div className="loading-button">
                  <p>Loading</p>
                  <CircularProgress size={15} />
                </div>
              </button>
            ) : (
              <button type="submit" className="submitButton">
                Register
              </button>
            )}
              </form>
          </div>
          <footer className="modal-footer">
            <p>
              Already have an Account ?{" "}
              <a
                className="auth-modal"
                onClick={() =>
                  swapModal({ modal: "register", modal2: "login" })
                }
              >
                Sign In
              </a>
            </p>

            <div className="form-separator">
              <span>or</span>
            </div>

            <div className="social-media">
              {/* <button className="google-connect">
                <img src={googleIcon} alt="google icon"/>
                <span>Connect with Google</span>
              </button> */}
              <div className="g-signin2" data-onsuccess="onSignIn"></div>
               <GoogleLogin
                  clientId="1046564133373-v6mejve3j4alr13o2hult3lomphkor4e.apps.googleusercontent.com"
                  buttonText="Login"
                  onSuccess={(response) => console.log(response)}
                  onFailure={(error) => console.log(error)}
                  cookiePolicy={'single_host_origin'}
                />
            </div>
          </footer>
      </div>
    </div>
  );
};

export default Register;
