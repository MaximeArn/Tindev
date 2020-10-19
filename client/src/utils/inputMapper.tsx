/** @format */

import Input from "../components/containers/Input";
import React from "react";
import { Login, Register } from "../models/inputs";

export default (input: Login | Register) => {
  const typeChecking = (inputType: Login | Register) =>
    "confirmPassword" in inputType ? "Register" : "Login";

  return Object.keys(input).map((props) => {
    const key = props as keyof typeof input;

    return (
      <Input
        key={key}
        name={key}
        inputValue={input[key]}
        formType={typeChecking(input)}
      />
    );
  });
};
