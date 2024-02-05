import React, { useEffect, useState } from "react";
import {
  ContenedorVideos,
  ContenedorVideos2,
  OtrosYoutube,
} from "./videosYoutubeContentStyle";
import useYoutube from "../../hooks/useYoutube";

const VideosYoutubeContent: React.FC<{}> = () => {
  const { videosDeCoscu } = useYoutube("Coscu");
  const [loading, setLoading] = useState<boolean>(true);
  const videos = videosDeCoscu;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [videosDeCoscu]);

  if (loading) {
    return <ContenedorVideos2></ContenedorVideos2>;
  }
  return (
    <article
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexFlow: "column",
        marginBottom: "100px",
      }}
    >
      <section
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexFlow: "row",
          marginBottom: "50px",
        }}
      >
        <ContenedorVideos>
          <div className="overlayy"></div>
          <img src={videos[0]?.snippet.thumbnails.maxres.url} />
        </ContenedorVideos>

        <OtrosYoutube>
          <div className="overlayy"></div>
          <img src={videos[1]?.snippet.thumbnails.maxres.url} />
        </OtrosYoutube>
      </section>

      <div>
        <a href="https://www.youtube.com/@Coscu " target="_blank">
          Ver mas
        </a>
      </div>
    </article>
  );
};

export default VideosYoutubeContent;
