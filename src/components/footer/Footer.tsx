import React from "react";
import { ContentFooter } from "./FooterStyle";

import ImgFooter from "../UI/imgfooter/ImgFooter";

const Footer: React.FC<{}> = () => {
  return (
    <ContentFooter>
      <ImgFooter></ImgFooter>
    </ContentFooter>
  );
};

export default Footer;
