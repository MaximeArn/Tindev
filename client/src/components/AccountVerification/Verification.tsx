import React, { useEffect } from "react";
import { AccountVerification } from "../../models/users";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory } from "react-router-dom";
import "./verification.scss";

const Verification = ({
  newLinkSuccess,
  activationSuccess,
  newLinkVerificationErrorMessage: { msg: newLinkError, userId },
  accountActivationErrorMessage: activationError,
  accountActivationLoader,
  newLinkLoader,
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
      {newLinkError ? (
        <>
          <div className="verification-error">{newLinkError}</div>
          {userId && (
            <div className="verification-expired">
              <div className="verification-expired-message">
                Click on the button below to send another activation link
              </div>
              <button
                className="verification-expired-button"
                onClick={() => sendActivationLink(userId)}
                disabled={newLinkLoader}
              >
                {newLinkLoader ? (
                  <CircularProgress size={15} style={{ color: "white" }} />
                ) : (
                  "Send link"
                )}
              </button>
            </div>
          )}
        </>
      ) : newLinkSuccess ? (
        <>
          <div className="verification-expired-success">{newLinkSuccess}</div>
        </>
      ) : (
        <div>
          {activationSuccess ? (
            <>
              <div className="verification-activation-success">{activationSuccess}</div>
              <button className="verification-button" onClick={() => history.push("/")}>
                Return to home page
              </button>
            </>
          ) : activationError ? (
            <>
              <div className="verification-activation-error">{activationError}</div>
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
