import "./ContentButton.scss";
import { useNavigate } from "react-router-dom";

const ContentButton = (props) => {
    let navigate = useNavigate();
    const clickHandler = () => {
        let path = "/create";
        navigate(path)
    }

  return (
    <div>
      <button className="content__button" onClick={clickHandler}>
        Get Started
      </button>
    </div>
  );
};

export default ContentButton;
