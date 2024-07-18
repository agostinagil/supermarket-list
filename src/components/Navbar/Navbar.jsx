import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import LoginModal from "../Login/Login";
import { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";

import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { isLoggedIn, logout } = useAuth();

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
              <Button color="inherit" className="navbar-toolbar-btn">
                How to use
              </Button>
              <Button color="inherit" className="navbar-toolbar-btn">
                <a href="/dashboard">Dashboard</a>
              </Button>
              <Button color="inherit" className="navbar-toolbar-btn">
                <a href="/fav-products">Favorite Products</a>
              </Button>
              <Button color="inherit" className="navbar-toolbar-btn">
                <a href="/shopping-cart">Shopping Cart</a>
              </Button>
              <Button
                color="inherit"
                onClick={logout}
                className="navbar-toolbar-btn"
              >
                Logout
              </Button>
            </>
          ) : (
            <Button color="inherit" onClick={handleOpen}>
              Login
            </Button>
          )}
        </Toolbar>
        <LoginModal open={open} onClose={handleClose} />
      </AppBar>
    </Box>
  );
}
