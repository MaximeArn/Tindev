/** @format */
import React, { FormEvent, useRef } from "react";
import { Authentication, RegisterAuth, Loaders } from "../../../models/states";
import { Link, useHistory } from "react-router-dom";
import googleIcon from "src/assets/icons/googleIcon.svg";
import modalClickHandler from "../../../utils/modalClickHandler";
import inputMapper from "../../../utils/inputMapper";
import "../modal.scss";
import CircularProgress from "@material-ui/core/CircularProgress";

const Register = ({
  register,
  error,
  submitRegister,
  registerLoader,
  closeModal,
  swapModal,
}: RegisterAuth) => {
  console.log("ERROR IN COMPONENT : ", error);
  const { firstname, lastname, age, city, ...mandatory } = register;
  const modal = useRef<HTMLDivElement>(null);
  const history = useHistory();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    submitRegister(history);
  };

  return (
    <div
      ref={modal}
      className="modalContainer"
      onMouseDown={(event) =>
        modalClickHandler({ event, modal, history, closeModal })
      }
    >
      <div className="modal" id="modal">
        <form method="POST" onSubmit={handleSubmit}>
          <div className="modal-padding">
            <h1 className="modal-title">Create Account</h1>
            {error && <span className="modal-error-message">{error}</span>}
            <div className="fields">{inputMapper(register, mandatory)}</div>
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
          </div>
          <footer className="modal-footer">
            <p>
              Already have an Account ?{" "}
              <a
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
