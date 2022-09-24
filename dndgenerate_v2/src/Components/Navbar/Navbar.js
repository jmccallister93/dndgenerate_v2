import React from "react";
import "./Navbar.css";
import NavbarLinks from "./NavbarLinks/NavbarLinks";
import NavbarLogo from "./NavbarLogo/NavbarLogo";

const Navbar = (props) => {
  return (
    <div className="navbar__wrapper">
      <NavbarLogo />
      <NavbarLinks />
    </div>
  );
};

export default Navbar;
