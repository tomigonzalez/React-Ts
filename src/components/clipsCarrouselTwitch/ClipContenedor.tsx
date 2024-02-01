import React from "react";
import {
  ContenedorCard,
  ContenedorContenidoTexto,
  ContenedorMiniatura,
  ContenidoTexto,
  Div,
  Img,
  LinksUser,
} from "./clipsCarrouselTwitchStyled";

interface Clips {
  thumbnail_url: string;
  url: string;
  title: string;
  view_count: string;
  created_at: string;
}

const ClipContenedor: React.FC<Clips> = (props) => {
  let published = props.created_at.split("T");
  return (
    <a href={props.url}>
      <ContenedorCard>
        <ContenedorMiniatura>
          <Div>
            <LinksUser>{props.view_count} vistas </LinksUser>
            <LinksUser style={{}}>{published[0]}</LinksUser>
          </Div>

          <Img src={props.thumbnail_url} alt={props.thumbnail_url} />
        </ContenedorMiniatura>
        <ContenedorContenidoTexto>
          <ContenidoTexto>
            <h2>{props.title}</h2>
          </ContenidoTexto>
        </ContenedorContenidoTexto>
      </ContenedorCard>
    </a>
  );
};

export default ClipContenedor;
