import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import { MenuItem } from "@mui/base/MenuItem";
import { Button, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { useAuth } from "../../../contexts/AuthContext";
import "./dropdown.css";

const DropdownNav = () => {
  const [isOpen, setIsOpen] = useState(true);
  const { logout } = useAuth();

  const handleMenu = () => setIsOpen(!isOpen);

  const isDesktop = useMediaQuery("(min-width:240px)");

  const isFontSize = !isDesktop ? "medium" : "large";

  return (
    <Dropdown>
      <MenuButton className="menu-dropdown-button" onClick={handleMenu}>
        {isOpen ? (
          <MenuIcon className="menu-icon" fontSize={isFontSize} />
        ) : (
          <CloseIcon className="menu-icon" fontSize={isFontSize} />
        )}
      </MenuButton>
      <Menu className="menu-dropdown">
        <MenuItem className="menu-dropdown-item">
          <NavLink to="/dashboard" className="menu-dropdown-link">
            Dashboard
          </NavLink>
        </MenuItem>
        <MenuItem className="menu-dropdown-item">
          <NavLink to="/fav-products" className="menu-dropdown-link">
            Favorite Products
          </NavLink>
        </MenuItem>
        <MenuItem className="menu-dropdown-item">
          <NavLink to="/shopping-cart" className="menu-dropdown-link">
            Shopping Cart
          </NavLink>
        </MenuItem>

        <div className="menuD-btn">
          <Button className="menu-dropdown-logout" onClick={logout}>
            Logout
          </Button>
        </div>
      </Menu>
    </Dropdown>
  );
};

export default DropdownNav;
