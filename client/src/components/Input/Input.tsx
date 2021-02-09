import React, { ChangeEvent } from "react";
import { GetInputValues, InputModel } from "../../models/inputs";
import convertInputType from "../../utils/inputType";
import capitalizeFirstLetter from "../../utils/capitalizeFirstLetter";
import PasswordStrengthBar from "react-password-strength-bar";
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
          name === "description"
            ? "auth-input description"
            : name === "password"
            ? `auth-input ${formType}`
            : "auth-input"
        }
        type={convertInputType(name)}
        name={name}
        placeholder={capitalizeFirstLetter(name)}
        onChange={handleChange}
        value={inputValue}
        required={required}
      />
      {formType === "Register" &&
        (name === "password" || name === "confirmPassword") && (
          <div className="passwordStrength">
            <PasswordStrengthBar password={inputValue as string} />
          </div>
        )}
    </>
  );
};

export default Input;
