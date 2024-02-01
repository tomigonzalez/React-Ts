import React from "react";
import {
  CountImg,
  CountainerImagen,
  CountenedorTodo,
  Onlinee,
} from "./OnlineStyle";
import CircleRec from "../circleRec/CircleRec";

const Online: React.FC<{}> = () => {
  return (
    <CountenedorTodo>
      <CountImg>
        <CircleRec></CircleRec>
        <CountainerImagen>
          <Onlinee src="/img/ONLINE.png" alt="Online"></Onlinee>
        </CountainerImagen>
      </CountImg>
    </CountenedorTodo>
  );
};

export default Online;
