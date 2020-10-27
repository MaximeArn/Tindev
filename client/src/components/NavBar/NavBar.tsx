/** @format */

import React, {
  ChangeEvent,
  FocusEvent,
  FormEvent,
  useRef,
  useState,
} from "react";
import { NavLink } from "react-router-dom";
import { NavState } from "../../models/states";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import SearchBarTray from "../containers/SearchTray";
import Collapse from "@material-ui/core/Collapse";
import useStyles from "../../styles/MUI/navbar";
import "./navBar.scss";

const NavBar = ({
  user,
  search,
  focused,
  getSearchValue,
  setSearchBarStatus,
  sendSearch,
  logout,
  openModal,
}: NavState) => {
  const searchBar = useRef<HTMLInputElement>(null);
  const classes = useStyles();
  const [
    accountMenuAnchor,
    setAccountMenuAnchor,
  ] = useState<null | HTMLElement>(null);
  const [
    mobileRightMenuAnchor,
    setMobileRightMenuAnchor,
  ] = useState<null | HTMLElement>(null);
  const [mainMenuAnchor, setMainMenuAnchor] = useState<null | HTMLElement>(
    null
  );

  const isAccountMenuOpen = Boolean(accountMenuAnchor);
  const isMobileRightMenuOpen = Boolean(mobileRightMenuAnchor);
  const isMainMenuOpen = Boolean(mainMenuAnchor);

  const openAccountMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAccountMenuAnchor(event.currentTarget);
  };

  const closeAccountMenu = () => {
    setAccountMenuAnchor(null);
    closeMobileRightMenu();
  };

  const closeMobileRightMenu = () => {
    setMobileRightMenuAnchor(null);
  };

  const openMobileRightMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMobileRightMenuAnchor(event.currentTarget);
  };

  const openMainMenu = (event: React.MouseEvent<HTMLElement>) => {
    setMainMenuAnchor(event.currentTarget);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendSearch();
  };

  const handleSearchChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    !focused && setSearchBarStatus(true);
    !target.value && setSearchBarStatus(false);
    getSearchValue(target.value);
  };

  const closeMainMenu = () => {
    setMainMenuAnchor(null);
  };

  const mainMenuId = "mainMenu";
  const renderMainMenu = (
    <Menu
      id={mainMenuId}
      open={isMainMenuOpen}
      anchorEl={mainMenuAnchor}
      keepMounted
      onClose={closeMainMenu}
      className={classes.mainMenu}
      TransitionComponent={Collapse}
    >
      <NavLink exact to="/">
        <MenuItem onClick={closeMainMenu}>Home</MenuItem>
      </NavLink>
      <NavLink to="/project/create">
        <MenuItem onClick={closeMainMenu}>Create</MenuItem>
      </NavLink>
      <NavLink to="/users">
        <MenuItem onClick={closeMainMenu}>Users</MenuItem>
      </NavLink>
    </Menu>
  );

  const accountMenuId = "accountMenu";
  const renderProfileMenu = (
    <Menu
      anchorEl={accountMenuAnchor}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={accountMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isAccountMenuOpen}
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

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileAuthMenu = (
    <Menu
      anchorEl={mobileRightMenuAnchor}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileRightMenuOpen}
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

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            aria-controls={mainMenuId}
            onClick={openMainMenu}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.leftLinkContainer}>
            <Typography className={classes.title} variant="h6" noWrap>
              <NavLink to="/">Tindev</NavLink>
            </Typography>
            {user && (
              <>
                <Typography className={classes.navLink} variant="subtitle1">
                  <NavLink to="/project/create">Create</NavLink>
                </Typography>
                <Typography className={classes.navLink} variant="subtitle1">
                  <NavLink to="/users">Users</NavLink>
                </Typography>
              </>
            )}
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form onSubmit={handleSearchSubmit}>
              <InputBase
                ref={searchBar}
                onFocus={() => search && setSearchBarStatus(true)}
                onBlur={(event: FocusEvent<HTMLInputElement>) =>
                  !event.relatedTarget && setSearchBarStatus(false)
                }
                name="search"
                placeholder="Search…"
                value={search}
                onChange={handleSearchChange}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
              {focused && <SearchBarTray />}
            </form>
          </div>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            {!user ? (
              <div className={classes.authLinkContainer}>
                <Typography
                  className={classes.navLink}
                  variant="h6"
                  noWrap
                  onClick={() =>
                    openModal({ modalStatus: true, modal: "login" })
                  }
                >
                  Sign In
                </Typography>
                <Typography
                  className={classes.navLink}
                  variant="h6"
                  noWrap
                  onClick={() =>
                    openModal({ modalStatus: true, modal: "register" })
                  }
                >
                  Sign Up
                </Typography>
              </div>
            ) : (
              <IconButton
                edge="end"
                aria-label="account of current user"
                aria-controls={accountMenuId}
                aria-haspopup="true"
                onClick={openAccountMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={openMobileRightMenu}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileAuthMenu}
      {renderProfileMenu}
      {renderMainMenu}
    </div>
  );
};

export default NavBar;
