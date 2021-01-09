import React, { useEffect } from "react";
import { ResetPasswordProps } from "../../models/states";
import Input from "../containers/Input";
import "./resetpassword.scss";

const ResetPassword = ({
  inputs,
  error: { msg: errorMessage, userId },
  submitForm,
  verifyTokenValidity,
  sendNewResetPasswordLink,
}: ResetPasswordProps) => {
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
                className="reset-password-new-link"
                onClick={() => sendNewResetPasswordLink(userId)}
              >
                Send a new link
              </button>
            </div>
          )}
        </>
      ) : (
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

          <button type="submit" className="reset-password-button">
            Confirm
          </button>
        </form>
      )}
    </div>
  );
};

export default ResetPassword;
