/* eslint-disable react/prop-types */
import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const NavDesktop = ({ links }) => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    setActiveLink(location.hash || location.pathname);
  }, [location]);

  return (
    <>
      {links.map((link) => (
        <Button key={link.title} className="navbar-links">
          {link.isAnchor ? (
            <a
              href={link.path}
              className={`nav-link ${activeLink === link.path ? "active" : ""}`}
              onClick={() => setActiveLink(link.path)}
            >
              {link.title}
            </a>
          ) : (
            <NavLink to={link.path} className="nav-link">
              {link.title}
            </NavLink>
          )}
        </Button>
      ))}
    </>
  );
};

export default NavDesktop;
