import React from "react";
import "./NavbarLinks.scss";

const NavbarLinks = (props) => {
  return (
    <ul className="navbar__links">
      <li>
        <a className="navbar__links-item" href="#">
          Home
        </a>
      </li>
      <li>
        <a className="navbar__links-item" href="#">
          Create
        </a>
      </li>
      <li>
        <a className="navbar__links-item" href="#">
          Signup
        </a>
      </li>
    </ul>
  );
};

export default NavbarLinks;
