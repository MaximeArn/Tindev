import React from "react";
import { AccountVerification } from "../../models/users";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./verification.scss";

const Verification = ({
  success,
  error,
  loader,
  activateAccount,
}: AccountVerification) => {
  return (
    <div className="verification">
      {error ? (
        <div className="verification-error">{error}</div>
      ) : (
        <>
          {success ? (
            //TODO: customize success message with another redirect button to home page etc..
            <div className="verification-success">{success}</div>
          ) : (
            <button
              className="verification-button"
              onClick={() => activateAccount()}
              disabled={loader}
            >
              {loader ? (
                <CircularProgress size={15} />
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
