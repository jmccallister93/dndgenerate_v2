import { useState } from "react";

const CardImage = (props) => {
    const imgSource = <img
    className="card__img"
    src={require("/home/topshelf/repos/dndgenerate_v2/dndgenerate_v2/src/images/monster01.jpg")}
    alt="image not found"
  />

  const newImgSource = <img
  className="card__img"
  src={require("/home/topshelf/repos/dndgenerate_v2/dndgenerate_v2/src/images/merchant01.png")}
  alt="image not found"
/>
    
    const [artwork, setArtwork] = useState(imgSource) 

    const updateArtwork = () => {
        setArtwork(...previousState => {
            return {...previousState, newImgSource}
        })
    }

  return artwork;
};

export default CardImage;
