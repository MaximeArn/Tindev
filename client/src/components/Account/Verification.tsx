import React, { useEffect } from "react";
import { AccountVerification } from "../../models/users";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory } from "react-router-dom";
import "./verification.scss";

const Verification = ({
  activationLinkSuccess,
  activationSuccess,
  error: { msg: errorMessage, userId },
  accountActivationLoader,
  activationLinkLoader,
  activateAccount,
  checkTokenValidity,
  sendActivationLink,
}: AccountVerification) => {
  const history = useHistory();

  useEffect(() => {
    checkTokenValidity();
  }, []);

  return (
    <div className="verification">
      {errorMessage ? (
        <>
          <div className="verification-error">{errorMessage}</div>
          {userId && (
            <div className="verification-expired">
              <div className="verification-expired-message">
                Click on the button below to send another activation link
              </div>
              <button
                className="verification-expired-button"
                onClick={() => sendActivationLink(userId)}
              >
                {activationLinkLoader ? (
                  <CircularProgress size={15} style={{ color: "white" }} />
                ) : (
                  "Send link"
                )}
              </button>
            </div>
          )}
        </>
      ) : activationLinkSuccess ? (
        <>
          <div className="verification-expired-success">
            {activationLinkSuccess}
          </div>
        </>
      ) : (
        <div>
          {activationSuccess ? (
            <>
              <div className="verification-activationSuccess">
                {activationSuccess}
              </div>
              <button
                className="verification-button"
                onClick={() => history.push("/")}
              >
                Return to home page
              </button>
            </>
          ) : (
            <button
              className="verification-button"
              onClick={() => activateAccount()}
              disabled={accountActivationLoader}
            >
              {accountActivationLoader ? (
                <CircularProgress size={15} style={{ color: "white" }} />
              ) : (
                "Click Here to activate your account"
              )}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Verification;
