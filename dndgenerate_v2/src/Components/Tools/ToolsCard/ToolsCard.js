import { useNavigate } from "react-router-dom";
import CardWrapper from "../CardWrapper/CardWrapper";
import ToolsImage from "../CardContent/ToolsImage";
import "./ToolsCard.scss";

const ToolsCard = (props) => {
  let navigate = useNavigate();
  const monsterClickHandler = () => {
    let path = "/monster";
    navigate(path);
  };

  const npcClickHandler = () => {
    let path = '/npc'
    navigate(path)
  }

  return (
    <>
      <CardWrapper onClick={monsterClickHandler}>
        <ToolsImage />
      </CardWrapper>
      <CardWrapper onClick={npcClickHandler}>
        <ToolsImage />
      </CardWrapper>
    </>
  );
};

export default ToolsCard;
