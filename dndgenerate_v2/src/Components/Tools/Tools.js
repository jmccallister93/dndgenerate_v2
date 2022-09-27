import ContentText from "../HomeContent/ContentText/ContentText";
import ContentTitle from "../HomeContent/ContentTitle/ContentTitle";
import HomeContentWrapper from "../HomeContent/HomeContentWrapper/HomeContentWrapper";
import ToolsCard from "./ToolsCard/ToolsCard";
import ToolsCardWrapper from "./ToolsWrapper/ToolsCardWrapper";
import ToolsWrapper from "./ToolsWrapper/ToolsWrapper";

const Tools = (props) => {
  const ToolsTitle = "Select a Tool";
  const aboutToolsTitle = "About the Tools";

  return (
    <>
      <ToolsWrapper>
        <ContentTitle contentTitle={ToolsTitle} />
        <ToolsCardWrapper>
          <ToolsCard />
        </ToolsCardWrapper>
      </ToolsWrapper>
      <HomeContentWrapper>
        <ContentTitle contentTitle={aboutToolsTitle} />
        <ContentText />
      </HomeContentWrapper>
    </>
  );
};

export default Tools;
