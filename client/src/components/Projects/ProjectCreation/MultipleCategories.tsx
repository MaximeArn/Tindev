import React, { ChangeEvent, useEffect } from "react";
import { useTheme, Theme } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
import CircularProgress from "@material-ui/core/CircularProgress";
import { MultipleCategory } from "../../../models/categories";
import useStyles, {
  MenuProps,
  getStyles,
} from "../../../styles/MUI/MultipleCategories";

const MultipleCategories = ({
  name,
  categories,
  categoriesFieldValues,
  loader,
  getCategories,
  fetchCategories,
}: MultipleCategory) => {
  console.log("MULTIPLE CATEGORIES COMPONENT CALLED");
  const classes = useStyles();
  const theme = useTheme();

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = ({ target }: ChangeEvent<{ value: unknown }>) => {
    getCategories(name, target.value);
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
          <InputLabel className={classes.label} id="demo-mutiple-chip-label">
            Categories
          </InputLabel>
          <Select
            required
            labelId="demo-mutiple-chip-label"
            id="demo-mutiple-chip"
            multiple
            value={categoriesFieldValues}
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
