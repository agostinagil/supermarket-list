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

const DropdownNav = ({ links, button, actionButton }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleMenu = () => setIsOpen(!isOpen);

  const handleButtonClick = () => {
    actionButton();
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
      <Menu className="menu-dropdown">
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
          <Button className="menu-dropdown-logout" onClick={handleButtonClick}>
            {button}
          </Button>
        </div>
      </Menu>
    </Dropdown>
  );
};

export default DropdownNav;
