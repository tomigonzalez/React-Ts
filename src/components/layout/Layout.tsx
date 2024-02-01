import React, { useContext, useEffect, useState } from "react";
import { LayoutWrapper } from "./LayoutStyle";
import { useLocation } from "react-router";
import NavBar from "../navbar/NavBar";
import OverlayMenu from "../overlayMenu/OverlayMenu";
import Footer from "../footer/Footer";
import { Context } from "../../context/Context";

interface LayoutProps {
  children: React.ReactNode; //significa que puede recibir y renderizar una variedad de contenido.
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const example = useContext(Context) as any;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();
  // Agrega este console.log
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    // Función para manejar el evento de scroll
    const handleScroll = () => {
      // Verificar si el usuario ha desplazado hacia abajo
      if (window.scrollY > 0) {
        setIsMenuOpen(false); // Cerrar el menú plegable cuando se hace scroll
      }
    };
    // Agregar el evento de scroll al cargar el componente
    window.addEventListener("scroll", handleScroll);
    // Remover el evento al descargar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <LayoutWrapper>
      <NavBar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}></NavBar>
      <OverlayMenu
        className={isMenuOpen ? "menu_open" : ""}
        toggleMenu={toggleMenu}
      />
      {children}
      {example.showFooter && <Footer />}
    </LayoutWrapper>
  );
};

export default Layout;
