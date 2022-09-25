import ContentButton from "../HomeContent/ContentButton/ContentButton";
import ContentText from "../HomeContent/ContentText/ContentText";
import ContentTitle from "../HomeContent/ContentTitle/ContentTitle";
import "./Create.scss";

const Create = (props) => {
    const createTitle = "Select a Tool"
    const aboutCreateTitle = "About the Tools"

  return (
    <>
       <div className="homecontent__wrapper">
        <ContentTitle contentTitle={createTitle}/>
        <ContentButton />
      </div>
      <div className="homecontent__wrapper">
        <ContentTitle contentTitle={aboutCreateTitle}/>
        <ContentText />
      </div>
    </>
  );
};

export default Create;
