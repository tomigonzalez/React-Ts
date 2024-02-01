import styled from "styled-components";

export const MenuPlegable = styled.nav`
  width: 100%;
  height: 100vh;
  background-color: #111812;
  padding-top: 0vh;
  position: fixed;
  transition: height 0.3s;
  top: -120%;
  z-index: 4;
  transition: top 0.3s;

  &.menu_open {
    top: 0%;
  }
`;

export const MenuTitle = styled.div`
  width: 100%;
  height: 100%;
`;

export const Links = styled.div`
  z-index: 2;
  margin-top: 15%;
  height: 40%;
  width: 100%;
  position: absolute;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: space-around;

  p {
    font-family: coscu;
    color: white;
    font-size: 1.5em;
    margin: 0;
  }
  p:hover {
    color: #e55862;
  }
`;
