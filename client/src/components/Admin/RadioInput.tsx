import React from "react";
import { RadioInputProps } from "../../models/states";

const RadioInput = ({ duration, setDuration }: RadioInputProps) => {
  return (
    <>
      <label>
        <input
          type="radio"
          name="duration"
          value={duration}
          onChange={() => setDuration(duration)}
        />
        {duration}
      </label>
    </>
  );
};

export default RadioInput;
