import React from "react";
import { RegisterInput as Register } from "../../models/registerInputProps";
import convertInputType from "../../selectors/inputType";

const RegisterInput = ({ name, placeHolder, inputValue }: Register) => {
  return (
    <>
      <label>
        {placeHolder}
        <input
          type={convertInputType(name)}
          name={name}
          placeholder={placeHolder}
        />
      </label>
    </>
  );
};

export default RegisterInput;
