import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";

import LoginModal from "../Login/Login";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

import "./navbar.css";
import DropdownNav from "./Dropdown/Dropdown";
import NavDesktop from "./NavDesktop/NavDesktop";
import Register from "../Register/Register";

const loggedInLinks = [
  { title: "Dashboard", path: "/dashboard", isAnchor: false },
  { title: "Favorite Products", path: "/fav-products", isAnchor: false },
  { title: "Shopping List", path: "/shopping-cart", isAnchor: false },
];

const loggedOutLinks = [
  { title: "About", path: "#about", isAnchor: true },
  { title: "Features", path: "#features", isAnchor: true },
  { title: "Testimonials", path: "#testimonials", isAnchor: true },
];

export default function Navbar() {
  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const { isLoggedIn, logout } = useAuth();
  const isDesktop = useMediaQuery("(min-width:900px)");

  const handleOpen = (e) => {
    console.log(e);
    if (e.target.id === "login") setOpenLogin(true);

    if (e.target.id === "createaccount") setOpenRegister(true);
  };
  const handleClose = () => {
    setOpenLogin(false);
    setOpenRegister(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }} className="box">
      <AppBar position="static" className="navbar">
        <Toolbar className="navbar-toolbar">
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            className="navbar-brand"
          >
            <a href="/" className="logo-link">
              Supermarkt
            </a>
          </Typography>

          {isLoggedIn() ? (
            <>
              {!isDesktop && (
                <DropdownNav
                  links={loggedInLinks}
                  logout="Logout"
                  actionButton={logout}
                />
              )}

              {isDesktop && (
                <>
                  <NavDesktop links={loggedInLinks} />
                  <Button onClick={logout} className="login-btn">
                    Logout
                  </Button>
                </>
              )}
            </>
          ) : (
            <>
              {!isDesktop && (
                <DropdownNav
                  links={loggedOutLinks}
                  loginBtn="Login"
                  actionButton={handleOpen}
                  createAcc="Create Account"
                />
              )}
              {isDesktop && (
                <>
                  <NavDesktop links={loggedOutLinks} />
                  <Button
                    onClick={handleOpen}
                    className="action-btn"
                    id="login"
                  >
                    Login
                  </Button>
                  <Button
                    onClick={handleOpen}
                    id="createaccount"
                    className="action-btn"
                  >
                    Create account
                  </Button>
                </>
              )}
            </>
          )}
        </Toolbar>
        <LoginModal open={openLogin} onClose={handleClose} />
        <Register open={openRegister} onClose={handleClose} />
      </AppBar>
    </Box>
  );
}
