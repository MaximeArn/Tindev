import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Category } from "../../models/categories";

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
    projectLabel: {
      color: "#fff",
    },
    userLabel: {
      color: "#000",
    },
  })
);

export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 48 * 4.5 + 8,
      width: 250,
    },
  },
};

export function getStyles(name: string, categoriesFieldValues: Category[], theme: Theme) {
  return {
    fontWeight:
      categoriesFieldValues.indexOf({ name }) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default useStyles;
