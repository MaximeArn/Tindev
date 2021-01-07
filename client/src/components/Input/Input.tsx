import React, { ChangeEvent } from "react";
import { GetInputValues, InputModel } from "../../models/inputs";
import convertInputType from "../../utils/inputType";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import "./input.scss";

const Input = ({
  formType,
  name,
  inputValue,
  required,
  getInputValues,
}: InputModel) => {
  const handleChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    Object.keys(getInputValues).forEach((key) => {
      key.includes(formType) &&
        getInputValues[key as keyof GetInputValues](name, target.value);
    });
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
      />
    </>
  );
};

export default Input;
