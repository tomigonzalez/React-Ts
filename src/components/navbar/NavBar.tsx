import React from "react";
import Menu from "../UI/menu/Menu";
import { ComponentBar, LogoImg } from "./NavBarStyles";

import useTwitch from "../../hooks/useTwitch";
import Offline from "../UI/offline/Offline";
import Online from "../UI/online/Online";

const NavBar: React.FC<{ isMenuOpen: boolean; toggleMenu: () => void }> = (
  props
) => {
  const { isMenuOpen, toggleMenu } = props;
  const { streamData } = useTwitch("coscu");

  return (
    <ComponentBar>
      <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}></Menu>
      <LogoImg src="/img/Coscu_logo.png" alt="logo"></LogoImg>

      {streamData ? <Online /> : <Offline />}
    </ComponentBar>
  );
};

export default NavBar;
