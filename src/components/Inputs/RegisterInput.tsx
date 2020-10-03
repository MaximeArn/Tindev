import React from "react";
import { RegisterInput as Register } from "../../models/registerInputProps";
import convertInputType from "../../selectors/inputType";
import "./registerinput.scss";

const RegisterInput = ({ name, placeHolder, inputValue }: Register) => {
  return (
    <>
      <input
        type={convertInputType(name)}
        name={name}
        placeholder={placeHolder}
      />
    </>
  );
};

export default RegisterInput;
