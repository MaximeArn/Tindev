/** @format */

import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import userify from "../../../utils/whiteSpaceRemover";

export default (
  accountMenuAnchor: Element | null | undefined,
  closeAccountMenu: any,
  logout: Function,
  user: any
) => {
  const accountMenuId = "accountMenu";
  return (
    <Menu
      anchorEl={accountMenuAnchor}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={accountMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(accountMenuAnchor)}
      onClose={closeAccountMenu}
    >
      <div>
        <MenuItem
          onClick={() => {
            closeAccountMenu();
            logout();
          }}
        >
          Logout
        </MenuItem>
        {user && (
          <Link to={`/user/${userify(user.username)}`}>
            <MenuItem onClick={closeAccountMenu}>My account</MenuItem>
          </Link>
        )}
      </div>
    </Menu>
  );
};
