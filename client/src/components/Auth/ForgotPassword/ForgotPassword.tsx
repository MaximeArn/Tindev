import React, { useRef } from "react";
import { ForgotPasswordProps } from "../../../models/modal";
import Input from "../../containers/Input";
import CircularProgress from "@material-ui/core/CircularProgress";
import "./forgotpassword.scss";

const ForgotPassword = ({
  inputValue,
  setModalStatus,
  resetPassword,
  error,
  success,
  loader,
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
          {error && <div className="fpw-modal-error">{error}</div>}
          {success ? (
            <>
              <div className="fpw-modal-success">{success}</div>
              <div className="fpw-modal-buttons">
                <button
                  type="button"
                  className="fpw-modal-submit"
                  onClick={() => setModalStatus(false)}
                >
                  Close
                </button>
              </div>
            </>
          ) : (
            <>
              <form
                action=""
                onSubmit={(event) => {
                  event.preventDefault();
                  resetPassword();
                }}
              >
                <Input
                  name="email"
                  formType="ForgotPassword"
                  inputValue={inputValue}
                  required={true}
                />

                <div className="fpw-modal-buttons">
                  <>
                    <button
                      type="submit"
                      className="fpw-modal-submit"
                      disabled={loader}
                    >
                      {loader ? (
                        <div className="loading-button">
                          <p>Loading</p>
                          <CircularProgress size={15} />
                        </div>
                      ) : (
                        "Confirm"
                      )}
                    </button>
                    <button
                      disabled={loader}
                      type="button"
                      className="fpw-modal-submit"
                      onClick={() => setModalStatus(false)}
                    >
                      Close
                    </button>
                  </>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
