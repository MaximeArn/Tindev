import React from "react";
import { ForgotPasswordProps } from "../../../models/modal";
import Input from "../../containers/Input";
import "./forgotpassword.scss";

const ForgotPassword = ({
  inputValue,
  setModalStatus,
}: ForgotPasswordProps) => {
  return (
    <div className="fpw-modal">
      <div className="fpw-modal-container" id="modal">
        <div className="modal-padding">
          <h1 className="fpw-modal-title">Reset Account Password</h1>
          <form action="" onSubmit={() => {}}>
            <Input
              name="email"
              formType="ForgotPassword"
              inputValue={inputValue}
              required={true}
            />
          </form>

          <button type="submit" className="fpw-modal-submit">
            Confirm
          </button>
          <button
            type="button"
            className="fpw-modal-submit"
            onClick={() => setModalStatus(false)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
