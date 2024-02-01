import React from "react";
import { ContainStream } from "./ContenedorStreamStyle";

import TwitchStream from "../emisionTwitch/emisionTwitch";

const ContenedorStream: React.FC<{}> = () => {
  return (
    <ContainStream>
      <TwitchStream channel="coscu"></TwitchStream>
    </ContainStream>
  );
};

export default ContenedorStream;
