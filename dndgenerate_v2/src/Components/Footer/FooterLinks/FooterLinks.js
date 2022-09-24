import "./FooterLinks.scss";

const FooterLinks = (props) => {
  return (
    <>
      <ul className="footer__links">
        <li>
          <a className="footer__links-item">Patreon</a>{" "}
        </li>
        <li>
          <a className="footer__links-item">Facebook</a>
        </li>
        <li>
          <a className="footer__links-item">Twitter</a>
        </li>
      </ul>
    </>
  );
};

export default FooterLinks;
