import React, { useState } from "react";
import { InputLabel, MenuItem, FormControl, Select as Input } from "@material-ui/core";
import Styles from "../../styles/MUI/SingleSelect";
import { SingleSelectProps } from "../../models/mui";
import capitalize from "../../utils/capitalizeFirstLetter";

const Select = ({ label, values }: SingleSelectProps) => {
  const [value, setValue] = useState("");
  const { formControl, selectEmpty, labelColor } = Styles();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
  };

  return (
    <FormControl className={formControl}>
      <InputLabel id="demo-simple-select-required-label" className={labelColor}>
        {capitalize(label)}
      </InputLabel>
      <Input
        labelId="demo-simple-Input-required-label"
        id="demo-simple-select-required"
        value={value}
        onChange={handleChange}
        className={selectEmpty}
      >
        {values.map(({ username }) => {
          <MenuItem value={username}>{username}</MenuItem>;
        })}
      </Input>
    </FormControl>
  );
};

export default Select;
