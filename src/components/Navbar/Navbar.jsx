import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { NavLink } from "react-router-dom";

import LoginModal from "../Login/Login";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

import "./navbar.css";
import DropdownNav from "./Dropdown/Dropdown";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { isLoggedIn, logout } = useAuth();

  const isDesktop = useMediaQuery("(min-width:900px)");

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
            Supermarkt
          </Typography>

          {isLoggedIn() ? (
            <>
              {!isDesktop && <DropdownNav />}
              {/* <DropdownNav /> */}
              {isDesktop && (
                <>
                  <Button color="inherit" className="navbar-links">
                    How to use
                  </Button>
                  <Button className="navbar-links">
                    <NavLink to="/dashboard" className="nav-link">
                      Dashboard
                    </NavLink>
                  </Button>
                  <Button className="navbar-links">
                    <NavLink to="/fav-products" className="nav-link">
                      Favorite Products
                    </NavLink>
                  </Button>
                  <Button className="navbar-links">
                    <NavLink to="/shopping-cart" className="nav-link">
                      Shopping Cart
                    </NavLink>
                  </Button>
                  <Button onClick={logout} className="login-btn">
                    Logout
                  </Button>
                </>
              )}
            </>
          ) : (
            <Button onClick={handleOpen} className="login-btn">
              Login
            </Button>
          )}
        </Toolbar>
        <LoginModal open={open} onClose={handleClose} />
      </AppBar>
    </Box>
  );
}
