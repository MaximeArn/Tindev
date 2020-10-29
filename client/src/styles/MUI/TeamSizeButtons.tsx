/** @format */

import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      width: "25%",
    },
    buttonGroup: {
      width: "100%",
    },
    lastButton: {
      width: "25%",
      padding: 0,
    },
  })
);
export default useStyles;
