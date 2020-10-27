import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MailIcon from "@material-ui/icons/Mail";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";

export default (
  mobileRightMenuAnchor: any,
  closeMobileRightMenu: any,
  user: any,
  openModal: any,
  openAccountMenu: any
) => {
  return (
    <Menu
      anchorEl={mobileRightMenuAnchor}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id="primary-search-account-menu-mobile"
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={Boolean(mobileRightMenuAnchor)}
      onClose={closeMobileRightMenu}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      {!user ? (
        <div>
          <MenuItem
            onClick={() => openModal({ modalStatus: true, modal: "login" })}
          >
            <a className="nav-item">Sign in</a>
          </MenuItem>
          <MenuItem
            onClick={() => openModal({ modalStatus: true, modal: "register" })}
          >
            <a className="nav-item">Sign up</a>
          </MenuItem>
        </div>
      ) : (
        <MenuItem onClick={openAccountMenu}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      )}
    </Menu>
  );
};
