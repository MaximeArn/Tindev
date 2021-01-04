import React from "react";
import { ForgotPasswordProps } from "../../../models/modal";
import Input from "../../containers/Input";
import "./forgotpassword.scss";

const ForgotPassword = ({ inputValue }: ForgotPasswordProps) => {
  return (
    <div className="modal" id="modal">
      <div className="modal-padding">
        <h1 className="modal-title">Reset Account Password</h1>
        <Input
          name="email"
          formType="forgotPassword"
          inputValue={inputValue}
          required={true}
        />
      </div>
      <footer className="modal-footer"></footer>
    </div>
  );
};

export default ForgotPassword;
