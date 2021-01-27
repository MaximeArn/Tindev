import React, { ChangeEvent, useEffect } from "react";
import { useTheme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import CircularProgress from "@material-ui/core/CircularProgress";
import { MultipleCategory } from "../../models/categories";
import useStyles, { MenuProps, getStyles } from "../../styles/MUI/MultipleCategories";
import { GetSelectedValues } from "../../models/mui";

const MultipleCategories = ({
  toUpdate,
  inputName,
  categories,
  categoriesFieldValues,
  technos,
  getSelectedValues,
  loader,
  fetchCategories,
}: MultipleCategory) => {
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = ({ target }: ChangeEvent<{ value: unknown }>) => {
    getSelectedValues[toUpdate as keyof GetSelectedValues](inputName, target.value);
  };

  return (
    <div>
      {loader ? (
        <div className="loader">
          <p>Loading</p>
          <CircularProgress size={15} />
        </div>
      ) : (
        <FormControl className={classes.formControl}>
          <InputLabel
            className={classes[inputName === "technos" ? "userLabel" : "projectLabel"]}
            id="demo-mutiple-chip-label"
          >
            Categories
          </InputLabel>
          <Select
            required
            labelId="demo-mutiple-chip-label"
            id="demo-mutiple-chip"
            multiple
            value={inputName === "technos" ? technos : categoriesFieldValues}
            onChange={handleChange}
            input={<Input id="select-multiple-chip" />}
            renderValue={(selected: any) => {
              return (
                <div className={classes.chips}>
                  {selected.map((value: string) => (
                    <Chip key={value} label={value} className={classes.chip} />
                  ))}
                </div>
              );
            }}
            MenuProps={MenuProps}
          >
            {categories.map(({ name }) => {
              return (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, categoriesFieldValues, theme)}
                >
                  {name}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      )}
    </div>
  );
};

export default MultipleCategories;
