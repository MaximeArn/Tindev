import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default (
  accountMenuAnchor: Element | null | undefined,
  closeAccountMenu: any,
  logout: Function
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
        <MenuItem onClick={closeAccountMenu}>My account</MenuItem>
      </div>
    </Menu>
  );
};
