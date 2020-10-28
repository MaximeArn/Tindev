import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { NavLink } from "react-router-dom";
import Collapse from "@material-ui/core/Collapse";
import useStyles from "../../../styles/MUI/navbar";

export default (mainMenuAnchor: any, closeMainMenu: any) => {
  const { mainMenu } = useStyles();
  return (
    <Menu
      id="mainMenu"
      open={Boolean(mainMenuAnchor)}
      anchorEl={mainMenuAnchor}
      keepMounted
      onClose={() => closeMainMenu(null)}
      className={mainMenu}
      TransitionComponent={Collapse}
    >
      <NavLink exact to="/">
        <MenuItem onClick={() => closeMainMenu(null)}>Home</MenuItem>
      </NavLink>
      <NavLink to="/project/create">
        <MenuItem onClick={() => closeMainMenu(null)}>Create</MenuItem>
      </NavLink>
      <NavLink to="/users">
        <MenuItem onClick={() => closeMainMenu(null)}>Users</MenuItem>
      </NavLink>
    </Menu>
  );
};
