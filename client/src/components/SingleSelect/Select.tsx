import React, { useState } from "react";
import { InputLabel, MenuItem, FormControl, Select as Input } from "@material-ui/core";
import Styles from "../../styles/MUI/SingleSelect";
import { SingleSelectProps } from "../../models/mui";

const Select = ({ label, values }: SingleSelectProps) => {
  const [value, setValue] = useState("");
  const { formControl, selectEmpty } = Styles();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string);
  };

  return (
    <FormControl required className={formControl}>
      <InputLabel id="demo-simple-select-required-label">{label}</InputLabel>
      <Input
        labelId="demo-simple-Input-required-label"
        id="demo-simple-select-required"
        value={value}
        onChange={handleChange}
        className={selectEmpty}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Input>
    </FormControl>
  );
};

export default Select;
