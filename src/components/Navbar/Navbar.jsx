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

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { isLoggedIn, logout } = useAuth();

  const isDesktop = useMediaQuery("(min-width:900px)");

  const loggedInLinks = [
    { title: "Dashboard", path: "/dashboard", isAnchor: false },
    { title: "Favorite Products", path: "/fav-products", isAnchor: false },
    { title: "Shopping Cart", path: "/shopping-cart", isAnchor: false },
  ];

  const loggedOutLinks = [
    { title: "About", path: "#about", isAnchor: true },
    { title: "Features", path: "#features", isAnchor: true },
    { title: "Testimonials", path: "#testimonials", isAnchor: true },
  ];

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
                  button="Logout"
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
                  button="Login"
                  actionButton={handleOpen}
                />
              )}
              {isDesktop && (
                <>
                  <NavDesktop links={loggedOutLinks} />
                  <Button onClick={handleOpen} className="login-btn">
                    Login
                  </Button>
                </>
              )}
            </>
          )}
        </Toolbar>
        <LoginModal open={open} onClose={handleClose} />
      </AppBar>
    </Box>
  );
}
