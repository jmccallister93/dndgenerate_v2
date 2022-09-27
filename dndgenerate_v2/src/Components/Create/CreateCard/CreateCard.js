import "./CreateCard.scss"

const CreateCard = (props) => {
  return(
    <div className="card__wrapper">
            <img className="card__img" src={ require('/home/topshelf/repos/dndgenerate_v2/dndgenerate_v2/src/images/monster01.jpg') }/>
                <div className="card__conatiner">
                    <p className="card__text">Monster Creator</p>
                </div>
        </div>
  )
};

export default CreateCard;
