import React, { ChangeEvent } from "react";
import { InputModel } from "../../models/inputs";
import convertInputType from "../../utils/inputType";
import "./input.scss";

const Input = ({
  formType,
  name,
  placeHolder,
  inputValue,
  getRegisterInputValue,
  getLoginInputValue,
}: InputModel) => {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    return formType === "Register"
      ? getRegisterInputValue(name, target.value)
      : getLoginInputValue(name, target.value);
  };

  return (
    <>
      <input
        className="auth-input"
        type={convertInputType(name)}
        name={name}
        placeholder={placeHolder}
        onChange={handleChange}
        value={inputValue}
      />
    </>
  );
};

export default Input;
