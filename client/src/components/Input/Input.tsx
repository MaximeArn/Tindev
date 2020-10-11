import React, { ChangeEvent } from "react";
import { InputModel } from "../../models/inputs";
import convertInputType from "../../utils/inputType";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import "./input.scss";

const Input = ({
  formType,
  name,
  inputValue,
  getRegisterInputValue,
  getLoginInputValue,
  getProjectInputValue,
}: InputModel) => {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    return formType === "Register"
      ? getRegisterInputValue(name, target.value)
      : formType === "Login"
      ? getLoginInputValue(name, target.value)
      : getProjectInputValue(name, target.value);
  };

  return (
    <>
      {name === "category" ? (
        <select name={name}></select>
      ) : (
        <input
          className="auth-input"
          type={convertInputType(name)}
          name={name}
          placeholder={capitalizeFirstLetter(name)}
          onChange={handleChange}
          value={inputValue}
        />
      )}
    </>
  );
};

export default Input;
