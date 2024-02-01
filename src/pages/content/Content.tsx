import React from "react";
import { ContainerContent } from "./ContentStyle";

import ContenedorStream from "../../components/stream/ContenedorStream";
import { Title } from "../home/HomeStyle";

import ClipsCarrouselTwitch from "../../components/clipsCarrouselTwitch/clipsCarrouselTwitch";
import VideosYoutubeContent from "../../components/videosYoutuecontent copy/videosYoutubeContent";

const Content: React.FC<{}> = () => {
  return (
    <ContainerContent>
      <Title>STREAM</Title>
      <ContenedorStream></ContenedorStream>
      <Title
        style={{
          textAlign: "left",
          width: "80%",
          fontSize: "1.2rem",
          marginTop: "3%",
        }}
      >
        {" "}
        CLIPS MAS VISTOS
      </Title>
      <ClipsCarrouselTwitch></ClipsCarrouselTwitch>

      <Title>YOUTUBE</Title>
      <VideosYoutubeContent></VideosYoutubeContent>
    </ContainerContent>
  );
};

export default Content;
