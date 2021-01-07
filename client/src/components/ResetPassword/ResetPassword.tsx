import React from "react";
import { ResetPasswordProps } from "../../models/states";
import Input from "../containers/Input";
import "./resetpassword.scss";

const ResetPassword = ({ inputs }: ResetPasswordProps) => {
  return (
    <div className="reset-password">
      <form action="" className="reset-password-form">
        {Object.entries(inputs).map(([key, value]) => {
          return (
            <Input
              key={key}
              name={key}
              inputValue={value}
              required={true}
              formType="ResetPassword"
            />
          );
        })}

        <button type="submit" className="reset-password-button">
          Confirm
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
