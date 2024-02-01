import React, { useState } from "react";
import { Contain, MainContain, Overlay } from "./MenuStyle";

const Menu: React.FC<{ isMenuOpen: boolean; toggleMenu: () => void }> = (
  props
) => {
  const { toggleMenu } = props;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Contain>
      <MainContain>
        <a
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={toggleMenu}
        >
          <Overlay></Overlay>
          <div className={isHovered ? "hovered" : ""}></div>
        </a>
      </MainContain>
    </Contain>
  );
};

export default Menu;
