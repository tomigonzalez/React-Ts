import React from "react";
import {
  ContenedorCard,
  ContenedorContenidoTexto,
  ContenedorMiniatura,
  ContenidoTexto,
  Img,
  LinksUser,
} from "./ContenedorYoutubeStream";

interface VideoProps {
  snippet: {
    publishedAt: string;
    channelTitle: string;
    title: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
  resourceId: {
    videoId: string;
  };
}
const CountainYoutube: React.FC<VideoProps> = (props) => {
  const { snippet } = props;

  const canal = snippet.channelTitle;
  const image = snippet.thumbnails.high.url;

  let publishedAt2 = snippet.publishedAt.split("T");

  const snippet2 = snippet.title;

  return (
    <ContenedorCard>
      <ContenedorMiniatura>
        <Img src={image} alt={snippet2} />
      </ContenedorMiniatura>
      <ContenedorContenidoTexto>
        <ContenidoTexto>
          <h2>{snippet2}</h2>
        </ContenidoTexto>
        <LinksUser>
          <h2>@{canal}</h2>
          <span>{publishedAt2[0]}</span>
        </LinksUser>
      </ContenedorContenidoTexto>
    </ContenedorCard>
  );
};

export default CountainYoutube;
