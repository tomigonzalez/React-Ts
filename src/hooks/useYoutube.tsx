import Axios from "axios";
import moment from "moment";

import { useState, useEffect } from "react";

interface YoutubeData {
  idCoscuNum: string;
  videosIdCoscu: string;
  videosDeCoscu: any[];
}

const useYoutube = (channel: string): YoutubeData => {
  const apiKey = "AIzaSyAejYb1Xfayckx2HsmTb69gPm_IpAghu7E";

  const [idCoscuNum, setIdCoscu] = useState("");
  const [videosIdCoscu, setVideosIdCoscu] = useState("");
  const [videosDeCoscu, setVideosDeCoscu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await Axios.get(
          `https://www.googleapis.com/youtube/v3/search`,
          { params: { q: channel, type: "channel", key: apiKey } }
        );
        const idFromResponse = response1.data.items[0]?.id.channelId;

        if (idFromResponse) {
          setIdCoscu(idFromResponse);

          const response2 = await Axios.get(
            `https://www.googleapis.com/youtube/v3/channels`,
            {
              params: {
                part: "snippet,contentDetails,statistics",
                id: idFromResponse,
                key: apiKey,
              },
            }
          );
          const videoIdFromResponse =
            response2.data.items[0]?.contentDetails?.relatedPlaylists?.uploads;

          if (videoIdFromResponse) {
            setVideosIdCoscu(videoIdFromResponse);

            const response3 = await Axios.get(
              `https://www.googleapis.com/youtube/v3/playlistItems`,
              {
                params: {
                  part: "snippet",
                  playlistId: videoIdFromResponse,
                  maxResults: 50,
                  key: apiKey,
                },
              }
            );
            const videosFromResponse = response3.data.items;

            const cadaVideoId = videosFromResponse.map((video: any) => {
              return video.snippet.resourceId.videoId;
            });

            // Obtener información de contentDetails para cada video
            const response4 = await Axios.get(
              `https://www.googleapis.com/youtube/v3/videos`,
              {
                params: {
                  part: "snippet,contentDetails",
                  id: cadaVideoId.join(","), // IDs de videos separados por comas
                  key: apiKey,
                },
              }
            );

            const detailedVideos = response4.data.items;
            console.log(detailedVideos);
            const filteredVideos = detailedVideos.filter((video: any) => {
              const duration = moment.duration(video.contentDetails.duration);
              const durationInMinutes = duration.asMinutes();
              return durationInMinutes; // Filtra videos con más de 5 minutos
            });

            setVideosDeCoscu(filteredVideos); /// Actualizar los videos con información detallada
          }
        }
      } catch (error) {
        console.error("Error fetching dataaa:", error);
      }
    };

    fetchData();
  }, [channel, apiKey]);

  return { idCoscuNum, videosIdCoscu, videosDeCoscu };
};
export default useYoutube;
