import React from "react";
import { ResetPasswordProps } from "../../models/states";
import Input from "../containers/Input";
import "./resetpassword.scss";

const ResetPassword = ({ inputs }: ResetPasswordProps) => {
  console.log(inputs);
  return (
    <div className="reset-password">
      <form action="">
        {Object.entries(inputs).map(([key, value]) => {
          return (
            <Input
              name={key}
              inputValue={value}
              required={true}
              formType="resetPassword"
            />
          );
        })}
      </form>
    </div>
  );
};

export default ResetPassword;
