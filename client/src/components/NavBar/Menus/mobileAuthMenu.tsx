import React from "react";
import { AuthUserState } from "../../../models/users";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";

export default (
  mobileRightMenuAnchor: Element | null | undefined,
  closeMobileRightMenu: Function,
  user: AuthUserState | null,
  openModal: Function,
  openAccountMenu: Function
) => {
  return (
    <Menu
      anchorEl={mobileRightMenuAnchor}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id="primary-search-account-menu-mobile"
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(mobileRightMenuAnchor)}
      onClose={() => closeMobileRightMenu(null)}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <MailIcon />
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <NotificationsIcon />
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      {!user ? (
        <div>
          <MenuItem onClick={() => openModal({ modalStatus: true, modal: "login" })}>
            <a className="nav-item">Sign in</a>
          </MenuItem>
          <MenuItem onClick={() => openModal({ modalStatus: true, modal: "register" })}>
            <a className="nav-item">Sign up</a>
          </MenuItem>
        </div>
      ) : (
        <MenuItem onClick={({ currentTarget }) => openAccountMenu(currentTarget)}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>{user.username}</p>
        </MenuItem>
      )}
    </Menu>
  );
};
