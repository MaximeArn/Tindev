import React from "react";
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
  categories: string[];
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

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const MultipleCategories = ({ categories }: MultipleCategory) => {
  const classes = useStyles();
  const theme = useTheme();
  const [categoryName, setCategories] = React.useState<string[]>([]);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCategories(event.target.value as string[]);
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
          value={categoryName}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => {
            return (
              <div className={classes.chips}>
                {(selected as string[]).map((value) => (
                  <Chip key={value} label={value} className={classes.chip} />
                ))}
              </div>
            );
          }}
          MenuProps={MenuProps}
        >
          {categories.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, categoryName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};

export default MultipleCategories;
