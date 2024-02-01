import styled from "styled-components";

export const ContenedorVideos = styled.div`
  width: 60%;
  border: 1px solid white;
  height: 400px;
  margin-top: 60px;
`;

export const ContenedorCard = styled.div`
  cursor: pointer;
  width: 100%;
  height: 280px;
  border-radius: 20px 20px 0 0;
  border: 2px solid #111812;
  background-color: #111812c6;
`;
export const ContenedorMiniatura = styled.div`
  width: 100%;
  height: 80%;
  overflow: HIDDEN;
`;

export const Img = styled.img`
  transform: scale(1, 0.8);
  width: 100%;
  height: 100%;
`;
export const ContenedorContenidoTexto = styled.div`
  width: 100%;
  color: white;
`;
export const ContenidoTexto = styled.div`
  background-color: #00000030;
  width: 100%;
  height: 70%;

  h2 {
    margin: 0;
    text-align: left;
    font-size: 1rem;
  }
`;
export const Div = styled.div`
  width: 3.8%;
  display: flex;
  position: absolute;
  margin-left: 2px;
  top: 180px;
  z-index: 1;
  justify-content: space-between;
`;
export const LinksUser = styled.div`
  color: white;
  background-color: #00000090;
  display: flex;
  justify-content: space-between;
  font-size: 0.8rem;

  h2 {
    margin: 0;
    text-align: left;
    font-size: 0.8rem;
    padding-left: 5px;
  }
  span {
    margin: 0;
    text-align: left;
    font-size: 0.8rem;
    padding-right: 5px;
    color: gray;
  }
`;
