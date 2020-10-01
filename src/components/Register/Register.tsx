import React from "react";
import RegisterInput from "../Inputs/RegisterInput";
import { Authentication } from "../../models/states";
import capitalizeFirstLetter from "../../selectors/capitalizeFirstLetter";
const Register = ({ register }: Authentication) => {
  return (
    <div className="register">
      <h1>Create Account</h1>
      <form method="POST">
        <div className="fields">
          {Object.keys(register).map((props) => {
            const value = props as keyof typeof register;
            return (
              <RegisterInput
                key={props}
                name={props}
                placeHolder={capitalizeFirstLetter(props)}
                inputValue={register[value]}
              />
            );
          })}
        </div>
      </form>
    </div>
  );
};

export default Register;
