import React from "react";
import {
  ContenedorImgFooter,
  CoscuArmy,
  Img,
  Kongo,
  Nike,
} from "./ImgFooterStyle";

const ImgFooter: React.FC<{}> = () => {
  return (
    <ContenedorImgFooter>
      <Nike>
        <Img src="/img/nike.png" alt="sponsors"></Img>
      </Nike>
      <CoscuArmy>
        <Img src="/img/coscuarmy.png" alt="sponsors"></Img>
      </CoscuArmy>
      <Kongo>
        <Img src="/img/kongo.png" alt="sponsors"></Img>
      </Kongo>
    </ContenedorImgFooter>
  );
};

export default ImgFooter;
