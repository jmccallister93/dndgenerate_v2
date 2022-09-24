import React from "react";
import "./HomeContent.scss";
import ContentTitle from "./ContentTitle/ContentTitle";
import ContentButton from "./ContentButton/ContentButton";

const HomeContent = (props) => {
  return (
    <div className="homecontent__wrapper">
      <ContentTitle />
      <ContentButton />
    </div>
  );
};

export default HomeContent;
