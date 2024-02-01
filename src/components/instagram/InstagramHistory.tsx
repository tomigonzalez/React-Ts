import React from "react";
import {
  ContenedorHistory,
  ContenedorImagen,
  ImagenHistory,
} from "./InstagramHistoryStyle";

const InstagramHistory: React.FC<{}> = () => {
  return (
    <ContenedorHistory>
      <ContenedorImagen>
        <ImagenHistory src="/img/iphone.png"></ImagenHistory>
      </ContenedorImagen>
    </ContenedorHistory>
  );
};

export default InstagramHistory;
