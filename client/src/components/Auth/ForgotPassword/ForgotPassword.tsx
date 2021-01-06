import React, { useRef } from "react";
import { ForgotPasswordProps } from "../../../models/modal";
import Input from "../../containers/Input";
import "./forgotpassword.scss";

const ForgotPassword = ({
  inputValue,
  setModalStatus,
  resetPassword,
}: ForgotPasswordProps) => {
  const modal = useRef<any>(null);

  return (
    <div
      className="fpw-modal"
      onClick={({ target }) =>
        !modal.current?.contains(target) && setModalStatus(false)
      }
    >
      <div ref={modal} className="fpw-modal-container" id="modal">
        <div className="modal-padding">
          <h1 className="fpw-modal-title">Reset Account Password</h1>
          <form action="" onSubmit={() => resetPassword()}>
            <Input
              name="email"
              formType="ForgotPassword"
              inputValue={inputValue}
              required={true}
            />
          </form>

          <div className="fpw-modal-buttons">
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
    </div>
  );
};

export default ForgotPassword;
