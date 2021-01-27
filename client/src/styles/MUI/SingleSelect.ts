import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export default makeStyles(({ spacing }: Theme) =>
  createStyles({
    formControl: {
      margin: spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: spacing(2),
    },
  })
);
