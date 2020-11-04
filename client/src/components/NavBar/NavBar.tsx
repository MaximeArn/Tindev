/** @format */

import React, { ChangeEvent, FocusEvent, FormEvent, useRef } from "react";
import { NavLink } from "react-router-dom";
import { NavState } from "../../models/states";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";
import SearchBarTray from "../containers/SearchTray";
import useStyles from "../../styles/MUI/navbar";
import renderMainMenu from "./Menus/mainMenu";
import renderProfileMenu from "./Menus/profileMenu";
import renderMobileAuthMenu from "./Menus/mobileAuthMenu";
import "./navBar.scss";

const NavBar = ({
  user,
  search,
  focused,
  account,
  mobile,
  main,
  getSearchValue,
  setSearchBarStatus,
  logout,
  openModal,
  history,
  setAccountMenu,
  setMobileMenu,
  setMainMenu,
}: NavState) => {
  const searchBar = useRef<HTMLInputElement>(null);
  const classes = useStyles();

  const closeAccountMenu = () => {
    setAccountMenu(null);
    setMobileMenu(null);
  };

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    history.push({
      pathname: "/search",
      search: `term=${search}`,
    });
  };

  const handleSearchChange = ({
    target,
  }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    !focused && setSearchBarStatus(true);
    !target.value && setSearchBarStatus(false);
    getSearchValue(target.value);
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.navBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            aria-controls={`mainMenu`}
            onClick={({ currentTarget }) => setMainMenu(currentTarget)}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.leftLinkContainer}>
            <Typography className={classes.title} variant="h6" noWrap>
              <NavLink exact to="/">
                Tindev
              </NavLink>
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
            <IconButton color="inherit">
              <MailIcon />
            </IconButton>
            <IconButton color="inherit">
              <NotificationsIcon />
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
                aria-controls={`accountMenu`}
                aria-haspopup="true"
                onClick={({ currentTarget }) => setAccountMenu(currentTarget)}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            )}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={`primary-search-account-menu-mobile`}
              aria-haspopup="true"
              onClick={({ currentTarget }) => setMobileMenu(currentTarget)}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileAuthMenu(
        mobile,
        setMobileMenu,
        user,
        openModal,
        setAccountMenu
      )}
      {renderProfileMenu(account, closeAccountMenu, logout)}
      {renderMainMenu(main, setMainMenu)}
    </div>
  );
};

export default NavBar;
