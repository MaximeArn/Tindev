import React, { ChangeEvent } from "react";
import { Register } from "../../models/registerInputProps";
import convertInputType from "../../selectors/inputType";
import "./input.scss";

const Input = ({
  formType,
  name,
  placeHolder,
  inputValue,
  getRegisterInputValue,
  getLoginInputValue,
}: Register) => {
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    return formType === "Register"
      ? getRegisterInputValue(name, target.value)
      : getLoginInputValue(name, target.value);
  };

  return (
    <>
      <input
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
