import styled from "styled-components";

export const OtrosYoutube = styled.div`
  width: 45%;
  height: 320px;
  margin-top: 60px;
  position: relative; /* Añade posición relativa al contenedor */

  & img {
    width: 100%;
    height: 100%;
  }

  & .overlayy {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.263);
  }
`;

export const ContenedorVideos = styled.div`
  width: 45%;
  height: 320px;
  margin-top: 60px;
  position: relative;
  position: relative; /* Añade posición relativa al contenedor */

  & img {
    width: 100%;
    height: 100%;
  }

  & .overlayy {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.263);
  }
`;
