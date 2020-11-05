/** @format */

import {
  fade,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      display: "block",
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    navLink: {
      display: "none",
      cursor: "pointer",
      [theme.breakpoints.up("sm")]: {
        display: "block",
        paddingLeft: "1.5rem",
      },
    },
    usernameNavLink: {
      display: "none",
      cursor: "pointer",
      [theme.breakpoints.up("sm")]: {
        display: "block",
        paddingLeft: ".2rem",
      },
    },
    leftLinkContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "baseline",
    },
    authLinkContainer: {
      display: "flex",
    },
    navBar: {
      backgroundColor: "#333",
      position: "fixed",
      top: 0,
      zIndex: 1000,
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    mainMenu: {
      width: "100vw",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
        alignItems: "center",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  })
);

export default useStyles;
