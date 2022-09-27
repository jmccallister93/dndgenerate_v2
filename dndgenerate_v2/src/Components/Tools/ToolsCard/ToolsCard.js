import { useNavigate } from "react-router-dom";
import CardWrapper from "../CardWrapper/CardWrapper";
import ToolsImage from "../CardContent/ToolsImage";
import "./ToolsCard.scss";

const ToolsCard = (props) => {
  let navigate = useNavigate();
    const clickHandler = () => {
        let path = "/monster";
        navigate(path)
    }

  return (
    <CardWrapper onClick={clickHandler}>
      <ToolsImage/>
    </CardWrapper>
  );
};

export default ToolsCard;
