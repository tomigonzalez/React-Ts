import styled from "styled-components";

export const ContentYoutube = styled.section`
  width: 80%;
  display: flex;

  margin-bottom: 100px;

  align-items: CENTER;
`;
export const Loader5 = styled.section`
  width: 100%;
  height: 200px;
  background-color: #1c1b1b;
`;

export const DivFlechas = styled.div`
  height: 100%;
  align-self: CENTER;
  font-size: 30px;
  cursor: pointer;
  margin: 20px;

  :hover {
    color: green;
  }
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
  height: 55%;
  border-radius: 20px 20px 0 0;
  overflow: HIDDEN;
`;

export const Img = styled.img`
  transform: scale(1.4);
  width: 100%;
  height: 100%;
`;
export const ContenedorContenidoTexto = styled.div`
  width: 100%;
  height: 45%;
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
export const LinksUser = styled.div`
  background-color: #00000030;
  width: 100%;
  height: 30%;

  display: flex;
  justify-content: space-between;

  h2 {
    margin: 0;
    text-align: left;
    font-size: 1rem;
    padding-left: 5px;
  }
  span {
    margin: 0;
    text-align: left;
    font-size: 1rem;
    padding-right: 5px;
    color: gray;
  }
`;
