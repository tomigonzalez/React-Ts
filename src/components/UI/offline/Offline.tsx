import React from "react";
import { CountImg, CountenedorTodo, Ofline } from "./OfflineStyle";

const Offline: React.FC<{}> = () => {
  return (
    <CountenedorTodo>
      <CountImg>
        <Ofline src="/img/offline.png" alt="Offline"></Ofline>
      </CountImg>
    </CountenedorTodo>
  );
};

export default Offline;
