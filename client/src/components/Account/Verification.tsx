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
        <button
          className="verification-button"
          onClick={() => activateAccount()}
        >
          {loader ? (
            <CircularProgress size={15} />
          ) : (
            "Click Here to activate your account"
          )}
        </button>
      )}
    </div>
  );
};

export default Verification;
