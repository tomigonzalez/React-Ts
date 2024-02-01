import React from "react";
import { Links, MenuPlegable, MenuTitle } from "./OverlayMenuStyle";
import PicantesMenu from "../UI/picantesmenu/PicantesMenu";
import { NavLink } from "react-router-dom";

const OverlayMenu: React.FC<{
  className: string;

  toggleMenu: () => void;
}> = (props) => {
  const { className, toggleMenu } = props;

  return (
    <MenuPlegable className={className}>
      <MenuTitle>
        <Links>
          <NavLink to="/" onClick={toggleMenu}>
            <p>INICIO</p>
          </NavLink>

          <NavLink to={"/coscu"} onClick={toggleMenu}>
            <p>COSCU</p>
          </NavLink>

          <NavLink to="/content" onClick={toggleMenu}>
            <p>CONTENIDO</p>
          </NavLink>

          <NavLink to="/networks" onClick={toggleMenu}>
            <p>REDES</p>
          </NavLink>

          <NavLink to="/sponsors" onClick={toggleMenu}>
            <p>SPONSORS</p>
          </NavLink>
        </Links>
        <PicantesMenu />
      </MenuTitle>
    </MenuPlegable>
  );
};

export default OverlayMenu;
