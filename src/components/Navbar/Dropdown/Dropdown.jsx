/* eslint-disable react/prop-types */
import { useState } from "react";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton } from "@mui/base/MenuButton";
import { MenuItem } from "@mui/base/MenuItem";
import { Button, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import "./dropdown.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../../contexts/AuthContext";

const DropdownNav = ({ links, loginBtn, logout, actionButton, createAcc }) => {
  const [isOpen, setIsOpen] = useState(true);
  const { isLoggedIn } = useAuth();

  const handleMenu = () => setIsOpen(!isOpen);

  const handleButtonClick = (e) => {
    actionButton(e);
    handleMenu();
  };

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
      <Menu className="menu-dropdown" autoFocus={false}>
        {links.map((link) => (
          <MenuItem key={link.title} className="menu-dropdown-item">
            {link.isAnchor ? (
              <a
                href={link.path}
                className="menu-dropdown-link"
                onClick={handleMenu}
              >
                {link.title}
              </a>
            ) : (
              <NavLink
                to={link.path}
                className="menu-dropdown-link"
                onClick={handleMenu}
              >
                {link.title}
              </NavLink>
            )}
          </MenuItem>
        ))}

        <div className="menuD-btn">
          {isLoggedIn() ? (
            <Button
              className="menu-dropdown-logout"
              onClick={handleButtonClick}
            >
              {logout}
            </Button>
          ) : (
            <>
              <Button
                className="menu-dropdown-logout"
                onClick={handleButtonClick}
                id={createAcc.toLowerCase().split(" ").join("")}
              >
                {createAcc}
              </Button>
              <Button
                id={loginBtn.toLowerCase()}
                className="menu-dropdown-logout"
                onClick={handleButtonClick}
              >
                {loginBtn}
              </Button>
            </>
          )}
        </div>
      </Menu>
    </Dropdown>
  );
};

export default DropdownNav;
