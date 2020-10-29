/** @format */

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

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

export default useStyles;
