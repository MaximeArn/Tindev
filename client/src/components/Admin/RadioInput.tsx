import React from "react";
import { RadioInputProps } from "../../models/states";

const RadioInput = ({ duration }: RadioInputProps) => {
  return (
    <>
      <label>
        <input type="radio" name="duration" value={duration} />
        {duration}
      </label>
    </>
  );
};

export default RadioInput;
