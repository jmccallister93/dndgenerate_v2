import React from "react";
import "./HomeContent.scss";
import ContentTitle from "./ContentTitle/ContentTitle";
import ContentButton from "./ContentButton/ContentButton";
import ContentText from "./ContentText/ContentText";

const HomeContent = (props) => {
    const homeTitle = "Tools for the Modern GM"
    const aboutTitle = "About DnDGenerate"


  return (
    <>
      <div className="homecontent__wrapper">
        <ContentTitle contentTitle={homeTitle}/>
        <ContentButton />
      </div>
      <div className="homecontent__wrapper">
        <ContentTitle contentTitle={aboutTitle}/>
        <ContentText />
      </div>
    </>
  );
};

export default HomeContent;
