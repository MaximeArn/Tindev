/** @format */

import React, { ChangeEvent } from "react";
import { InputModel } from "../../models/inputs";
import convertInputType from "../../utils/inputType";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import "./input.scss";

const Input = ({
  formType,
  name,
  inputValue,
  required,
  getRegisterInputValue,
  getLoginInputValue,
  getProjectInputValue,
  getProjectDetailValue,
}: InputModel) => {
  const handleChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    return formType === "Register"
      ? getRegisterInputValue(name, target.value)
      : formType === "Login"
      ? getLoginInputValue(name, target.value)
      : formType === "ProjectCreation"
      ? getProjectInputValue(name, target.value)
      : getProjectDetailValue(name, target.value);
  };

  return (
    <>
      <input
        className={
          name === "description" ? "auth-input description" : "auth-input"
        }
        type={convertInputType(name)}
        name={name}
        placeholder={capitalizeFirstLetter(name)}
        onChange={handleChange}
        value={inputValue}
        required={required}
        minLength={name === "description" ? 180 : 0}
      />
    </>
  );
};

export default Input;
