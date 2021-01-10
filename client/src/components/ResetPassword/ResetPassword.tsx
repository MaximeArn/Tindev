import React, { useEffect } from "react";
import { ResetPasswordProps } from "../../models/states";
import CircularProgress from "@material-ui/core/CircularProgress";
import Input from "../containers/Input";
import { useHistory } from "react-router-dom";
import "./resetpassword.scss";

const ResetPassword = ({
  inputs,
  validityError: { msg: errorMessage, userId },
  error,
  newResetLinkSuccess,
  success,
  submitForm,
  resetPasswordLinkLoader,
  resetPasswordLoader,
  verifyTokenValidity,
  sendNewResetPasswordLink,
}: ResetPasswordProps) => {
  const history = useHistory();

  useEffect(() => {
    verifyTokenValidity();
  }, []);

  return (
    <div className="reset-password">
      {errorMessage ? (
        <>
          <div className="reset-password-incorrect-token">{errorMessage}</div>
          {userId && (
            <div className="reset-password-expired">
              <div className="reset-password-expired-message">
                Click on the button below to send a new link to your email
                address
              </div>
              <button
                className="reset-password-new-link-button"
                onClick={() => sendNewResetPasswordLink(userId)}
                disabled={resetPasswordLinkLoader}
              >
                {resetPasswordLinkLoader ? (
                  <CircularProgress size={15} style={{ color: "white" }} />
                ) : (
                  "Send a new link"
                )}
              </button>
            </div>
          )}
        </>
      ) : newResetLinkSuccess ? (
        <div className="reset-password-success-message">
          {newResetLinkSuccess}
        </div>
      ) : success ? (
        <>
          <div className="reset-password-success">
            <div className="reset-password-success-message">{success}</div>
            <button
              type="button"
              className="reset-password-button-success"
              onClick={() => history.push("/")}
            >
              Return to home page
            </button>
          </div>
        </>
      ) : (
        <div>
          {error && <div className="reset-password-error">{error}</div>}
          <form
            action=""
            className="reset-password-form"
            onSubmit={(event) => {
              event.preventDefault();
              submitForm();
            }}
          >
            {Object.entries(inputs).map(([key, value]) => {
              return (
                <Input
                  key={key}
                  name={key}
                  inputValue={value}
                  required={true}
                  formType="ResetPassword"
                />
              );
            })}

            <button
              type="submit"
              className="reset-password-button"
              disabled={resetPasswordLoader}
            >
              {resetPasswordLoader ? (
                <CircularProgress size={15} style={{ color: "white" }} />
              ) : (
                "Confirm"
              )}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
