import React from "react";
import { ContenedorVideos, OtrosYoutube } from "./videosYoutubeContentStyle";

const VideosYoutubeContent: React.FC<{}> = () => {
  // const { videosDeCoscu } = useYoutube("Coscu");
  // const videos = videosDeCoscu;

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
          <img src="../public/img/grainy.jpg" />
        </ContenedorVideos>

        <OtrosYoutube>
          <div className="overlayy"></div>
          <img src="../public/img/grainy.jpg" />
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
{
  /* <img src={videos[0]?.snippet.thumbnails.maxres.url} /> */
}
{
  /* <img src={videos[1]?.snippet.thumbnails.maxres.url} /> */
}
export default VideosYoutubeContent;
