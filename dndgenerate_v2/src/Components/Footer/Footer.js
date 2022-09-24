import React from "react";
import "./Footer.scss";
import FooterCopyrights from "./FooterCopyright/FooterCopyright";
import FooterLinks from "./FooterLinks/FooterLinks";

const Footer = (props) => {
  return (
    <div className="footer__wrapper">
      <FooterCopyrights />
      <FooterLinks />
    </div>
  );
};

export default Footer;
