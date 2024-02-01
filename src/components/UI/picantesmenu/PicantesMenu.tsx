import React from "react";
import { ContenedorImg, OverlayMenu, PicanteImg } from "./PicantesMenuStyle";

const PicantesMenu: React.FC<{}> = () => {
  return (
    <OverlayMenu>
      <ContenedorImg>
        {[1, 2, 3, 4, 5, 6, 7, 8].map((number) => (
          <div className={`picante${number} `} key={`picante${number}`}>
            <PicanteImg
              className="shake"
              src="/img/picante.png"
              alt={`Picante ${number}`}
            />
          </div>
        ))}
      </ContenedorImg>
    </OverlayMenu>
  );
};

export default PicantesMenu;
