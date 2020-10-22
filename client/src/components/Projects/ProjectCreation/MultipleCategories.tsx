import React, { ChangeEvent } from "react";
import { Category } from "../../../models/categories";
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Chip from "@material-ui/core/Chip";
interface MultipleCategory {
  categories: Category[];
  categoriesFieldValues: Category[];
  getCategories: Function;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      width: "100%",
    },
    chips: {
      display: "flex",
      flexWrap: "wrap",
    },
    chip: {
      margin: 4,
      minWidth: "85px",
      borderRadius: "7px",
    },
    label: {
      color: "#fff",
    },
  })
);

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250,
    },
  },
};

function getStyles(
  name: string,
  categoriesFieldValues: Category[],
  theme: Theme
) {
  return {
    fontWeight:
      categoriesFieldValues.indexOf({ name }) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MultipleCategories = ({
  categories,
  categoriesFieldValues,
  getCategories,
}: MultipleCategory) => {
  const classes = useStyles();
  const theme = useTheme();

  const handleChange = (event: ChangeEvent<{ value: unknown }>) => {
    getCategories(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel className={classes.label} id="demo-mutiple-chip-label">
          Categories
        </InputLabel>
        <Select
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
    </div>
  );
};

export default MultipleCategories;
