import { useNavigate } from "react-router-dom";
import "./NavbarLinks.scss";

const NavbarLinks = (props) => {
  let navigate = useNavigate();
  const clickHandlerHome = () => {
    let path = "/";
    navigate(path);
  };
  const clickHandlerCreate = () => {
    let path = "/create";
    navigate(path);
  };
  const clickHandlerSignup = () => {
    let path = "/signup";
    navigate(path);
  };

  return (
    <ul className="navbar__links">
      <li>
        <button className="navbar__links-item" onClick={clickHandlerHome}>Home</button>
      </li>
      <li>
        <button className="navbar__links-item" onClick={clickHandlerCreate}>Create</button>
      </li>
      <li>
        <button className="navbar__links-item" onClick={clickHandlerSignup}>Signup</button>
      </li>
    </ul>
  );
};

export default NavbarLinks;
