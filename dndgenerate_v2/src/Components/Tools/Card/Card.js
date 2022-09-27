import CardWrapper from "../CardWrapper/CardWrapper";
import CreateImage from "../CardImage/CreateImage";
import "./CreateCard.scss";

const CreateCard = (props) => {
  return (
    <CardWrapper>
      <CreateImage/>
    </CardWrapper>
  );
};

export default CreateCard;
