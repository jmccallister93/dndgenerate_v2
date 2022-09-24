import React from "react";
import "./NavbarLinks.scss"

const NavbarLinks = (props) => {
  return (
    <ul className="navbar__links">
      <li className="navbar__link-item">Home</li>
      <li className="navbar__link-item">Create</li>
      <li className="navbar__link-item">Signup</li>
    </ul>
  );
};

export default NavbarLinks