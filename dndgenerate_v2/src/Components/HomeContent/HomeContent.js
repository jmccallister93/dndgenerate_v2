import React from "react";
import ContentTitle from "./ContentTitle/ContentTitle";
import ContentButton from "./ContentButton/ContentButton";
import ContentText from "./ContentText/ContentText";
import HomeContentWrapper from "./HomeContentWrapper/HomeContentWrapper";

const HomeContent = (props) => {
  const homeTitle = "Tools for the Modern GM";
  const aboutTitle = "About DnDGenerate";

  return (
    <>
      <HomeContentWrapper>
        <ContentTitle contentTitle={homeTitle} />
        <ContentButton />
      </HomeContentWrapper>
      <HomeContentWrapper>
        <ContentTitle contentTitle={aboutTitle} />
        <ContentText />
      </HomeContentWrapper>
    </>
  );
};

export default HomeContent;
