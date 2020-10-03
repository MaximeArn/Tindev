import React from "react";
import { RegisterInput as Register } from "../../models/registerInputProps";
import convertInputType from "../../selectors/inputType";
import "./input.scss";

const RegisterInput = ({
  name,
  placeHolder,
  inputValue,
  getInputValue,
}: Register) => {
  return (
    <>
      <input
        type={convertInputType(name)}
        name={name}
        placeholder={placeHolder}
        onChange={({ target }) => getInputValue(name, target.value)}
        value={inputValue}
      />
    </>
  );
};

export default RegisterInput;
