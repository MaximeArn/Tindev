import React from "react";
import { InputLabel, MenuItem, FormControl, Select as Input } from "@material-ui/core";
import Styles from "../../styles/MUI/SingleSelect";
import { SingleSelectProps } from "../../models/mui";
import capitalize from "../../utils/capitalizeFirstLetter";

const Select = ({ label, values, inputValue, getNewOwner }: SingleSelectProps) => {
  const { formControl, selectEmpty, labelColor } = Styles();

  const handleChange = ({ target }: React.ChangeEvent<{ value: unknown }>) => {
    getNewOwner(label, target.value);
  };

  return (
    <FormControl className={formControl}>
      <InputLabel id="demo-simple-select-required-label" className={labelColor}>
        {capitalize(label)}
      </InputLabel>
      <Input
        labelId="demo-simple-Input-required-label"
        id="demo-simple-select-required"
        value={inputValue}
        onChange={handleChange}
        className={selectEmpty}
      >
        {values.map(({ _id, username }) => (
          <MenuItem key={_id} value={username}>
            {capitalize(username)}
          </MenuItem>
        ))}
      </Input>
    </FormControl>
  );
};

export default Select;
