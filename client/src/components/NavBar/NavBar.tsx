/** @format */

import React, { FormEvent, useEffect, useRef } from "react";
import { findDOMNode } from "react-dom";
import { NavLink, Link } from "react-router-dom";
import { NavState } from "../../models/states";
import {
  fade,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
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
// import SearchBarTray from "./SearchBarTray";
import SearchBarTray from "../containers/SearchTray";
import "./navBar.scss";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    navLink: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
        paddingLeft: ".5rem",
      },
    },
    authLinkContainer: {
      display: "flex",
    },
    navBar: {
      backgroundColor: "#333",
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

const NavBar = ({
  user,
  research,
  focused,
  getSearchValue,
  setSearchBarStatus,
  sendSearch,
  logout,
  openModal,
}: NavState) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendSearch();
  };
  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <div>
        <MenuItem
          onClick={() => {
            handleMenuClose();
            logout();
          }}
        >
          Logout
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </div>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
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
        <MenuItem onClick={handleProfileMenuOpen}>
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
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            <NavLink to="/">Tindev</NavLink>
          </Typography>
          <Typography className={classes.navLink} variant="subtitle1">
            <NavLink to="/project/create">Create</NavLink>
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form onSubmit={handleSearch}>
              <InputBase
                onFocus={() => setSearchBarStatus(true)}
                onBlur={() => setSearchBarStatus(false)}
                name="search"
                placeholder="Search…"
                value={research}
                onChange={({ target }) => getSearchValue(target.value)}
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </form>
            <SearchBarTray />
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
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
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
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
};

export default NavBar;

// <>
//   <div>
//     <nav className="navbar">
//       <ul className="nav-list">
//         <div className="links">
//           <li className="nav-item">
//             <NavLink to="/" exact>
//               Tindev
//             </NavLink>
//           </li>
//           <li className="nav-item">
//             <NavLink to="/users" exact>
//               Members
//             </NavLink>
//           </li>
//           <li className="dropdown">
//             <span>Dropdown</span>

//             <div className="dropdown-content">
//               <svg className="dropdown-arrow">
//                 <path
//                   stroke="rgba(179, 187, 193, 0.25)"
//                   strokeWidth="1"
//                   d="M0,12 L7.5,0 L15,12"
//                 ></path>
//                 <polygon
//                   fill="#474747"
//                   strokeWidth="0"
//                   points="7.5,0 15,12 0,12"
//                 ></polygon>
//               </svg>
//               <div className="dropdown-list">
//                 <a href="#">LINK 1</a>
//                 <a href="#">LINK 2</a>
//                 <a href="#">LINK 3</a>
//               </div>
//             </div>
//           </li>
//         </div>

//         <div className="authNavLink">
//           {!user ? (
//             <>
//               <li className="nav-item">
//                 <a
//                   className="auth-modal"
//                   onClick={() =>
//                     openModal({ modalStatus: true, modal: "login" })
//                   }
//                 >
//                   Sign in
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a
//                   className="auth-modal"
//                   onClick={() =>
//                     openModal({ modalStatus: true, modal: "register" })
//                   }
//                 >
//                   Sign up
//                 </a>
//               </li>
//             </>
//           ) : (
//             <>
//               <li className="nav-item">
//                 <NavLink to="/project/create">Create a project</NavLink>
//               </li>
//               <li className="nav-item">
//                 <span className="dropdown">
//                   <FontAwesomeIcon icon={faUserCircle} />
//                   <span className="member">{user.username}</span>

//                   <div className="dropdown-content">
//                     <svg className="dropdown-arrow">
//                       <path
//                         stroke="rgba(179, 187, 193, 0.25)"
//                         strokeWidth="1"
//                         d="M0,12 L7.5,0 L15,12"
//                       ></path>
//                       <polygon
//                         fill="#474747"
//                         strokeWidth="0"
//                         points="7.5,0 15,12 0,12"
//                       ></polygon>
//                     </svg>
//                     <div className="dropdown-list">
//                       <NavLink to="/account">My Profile</NavLink>
//                       <a className="auth-modal" onClick={() => logout()}>
//                         Logout
//                       </a>
//                     </div>
//                   </div>
//                 </span>
//               </li>
//             </>
//           )}
//         </div>
//       </ul>
//     </nav>
//   </div>
// </>
