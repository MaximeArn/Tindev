import React from "react";
import { AccountVerification } from "../../models/users";
import "./verification.scss";

const Verification = ({ activateAccount }: AccountVerification) => {
  return (
    <div className="verification">
      <button className="verification-button" onClick={() => activateAccount()}>
        Click Here to activate your account
      </button>
    </div>
  );
};

export default Verification;
