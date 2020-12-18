import React, { useEffect } from "react";
import { AccountVerification } from "../../models/users";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./verification.scss";

const Verification = ({
  success,
  error,
  loader,
  activateAccount,
  checkTokenValidity,
}: AccountVerification) => {
  useEffect(() => {
    checkTokenValidity();
  }, []);

  return (
    <div className="verification">
      {error ? (
        <div className="verification-error">{error}</div>
      ) : (
        <>
          {success ? (
            <>
              <div className="verification-success">{success}</div>
              <button className="verification-button">
                Return to home page
              </button>
            </>
          ) : (
            <button
              className="verification-button"
              onClick={() => activateAccount()}
              disabled={loader}
            >
              {loader ? (
                <CircularProgress size={15} style={{ color: "white" }} />
              ) : (
                "Click Here to activate your account"
              )}
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default Verification;
