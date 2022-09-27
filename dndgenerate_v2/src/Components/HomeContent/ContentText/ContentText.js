import "./ContentText.scss";
import { useState } from "react";

const ContentText = (props) => {
  const homeContentText = 
    <p className="content__text">
      Welcome to DnDGenerate! The goal of this project is to assist Game Masters
      in creating content for their games. The tools provided will allow one to
      generate different game components and mechanics to be dropped right into
      a session during preperation or on the fly. Check out the Create page to
      see all the options.
    </p>
  ;

  return homeContentText;
};

export default ContentText;
