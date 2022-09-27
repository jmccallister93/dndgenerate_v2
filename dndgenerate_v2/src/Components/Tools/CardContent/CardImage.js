import { useState } from "react";

const CardImage = (props) => {
    const [cardImage, setCardImage] = useState("") 

  const monsterImage = (
    <img
      className="card__img"
      src={require("/home/topshelf/repos/dndgenerate_v2/dndgenerate_v2/src/images/monster01.jpg")}
      alt="image not found"
    />
  );

  return monsterImage;
};

export default CardImage;
