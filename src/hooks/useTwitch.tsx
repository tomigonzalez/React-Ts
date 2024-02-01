import { useState, useEffect } from "react";
import axios from "axios";

interface TwitchData {
  loading: boolean;
  error: string | null;
  streamData: any;
  infoData: any;
  streamFollowers: string;
  pastBroadcast: any;
  clipsDeCoscu: any[];
}

const useTwitch = (channel: string): TwitchData => {
  const [infoData, setInfoData] = useState(null);
  const [streamData, setStreamData] = useState(null);
  const [pastBroadcast, setPastBroadcast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [streamFollowers, setStreamFollowers] = useState("");
  const [error, setError] = useState("");
  const [clipsDeCoscu, setClipsDeCoscu] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const accessToken = await obtenerTokenDeAcceso();
        const id = await obtenerInfoCoscu(accessToken, channel);

        setInfoData(id);
        const [pastBroadcast, followersResponse] = await Promise.all([
          obtenerTransmicionCoscu(accessToken, channel, id),
          obtenerSeguidoresCoscu(accessToken, id),
          obtenerClipsCoscu(accessToken, id),
        ]);
        setPastBroadcast(pastBroadcast);
        setStreamFollowers(followersResponse);
      } catch (error: any) {
        setError("Error al obtener datos: " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [channel]);

  const obtenerTokenDeAcceso = async () => {
    const clientId = "38d7rxc7ynnl2x3pb3j4txvz0v25ac";
    const clientSecret = "i9bcbh7xi49fcno0b8leel25oordmn";
    const tokenUrl = "https://id.twitch.tv/oauth2/token";

    try {
      const respuesta = await axios.post(tokenUrl, null, {
        params: {
          client_id: clientId,
          client_secret: clientSecret,
          grant_type: "client_credentials",
        },
      });

      const accessToken = respuesta.data.access_token;
      return accessToken;
    } catch (error: any) {
      console.error("Error al obtener el token de acceso:", error.message);
      throw error;
    }
  };

  const obtenerInfoCoscu = async (accessToken: string, channel: string) => {
    try {
      const respuesta = await axios.get("https://api.twitch.tv/helix/users", {
        params: { login: channel },
        headers: {
          "Client-ID": "38d7rxc7ynnl2x3pb3j4txvz0v25ac",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      return respuesta.data.data[0].id;
    } catch (error: any) {
      setError("Error al obtener la info de Coscu: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const obtenerTransmicionCoscu = async (
    accessToken: string,
    channel: string,
    id: string
  ) => {
    try {
      const response = await axios.get("https://api.twitch.tv/helix/streams", {
        params: { user_login: channel },
        headers: {
          "Client-ID": "38d7rxc7ynnl2x3pb3j4txvz0v25ac",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const stream = response.data.data[0];

      setStreamData(stream);
      if (!stream) {
        const pastBroadcastResponse = await axios.get(
          "https://api.twitch.tv/helix/videos",
          {
            params: {
              user_id: id,
              first: 1,
              sort: "time",
            },
            headers: {
              "Client-ID": "38d7rxc7ynnl2x3pb3j4txvz0v25ac",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        return pastBroadcastResponse.data.data[0];
      }
      return stream;
    } catch (error: any) {
      throw new Error(
        "Error al obtener la transmisión de Coscu: " + error.message
      );
    }
  };

  const obtenerSeguidoresCoscu = async (accessToken: string, id: string) => {
    try {
      const id1 = id;
      const respuestaSeguidores = await axios.get(
        "https://api.twitch.tv/helix/channels/followers",
        {
          params: { broadcaster_id: id1 },
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Client-ID": "38d7rxc7ynnl2x3pb3j4txvz0v25ac",
          },
        }
      );

      if (respuestaSeguidores.status === 200) {
        const dataSeguidores = respuestaSeguidores.data;
        const totalSeguidores = dataSeguidores.total;
        return String(totalSeguidores);
      } else {
        throw new Error("Error al obtener la lista de seguidores de Coscu.");
      }
    } catch (error: any) {
      throw new Error(
        "Error al obtener los seguidores de Coscu: " + error.message
      );
    }
  };

  const obtenerClipsCoscu = async (accessToken: string, id: string) => {
    try {
      const id1 = id;
      const respuestaClips = await axios.get(
        "https://api.twitch.tv/helix/clips",
        {
          params: { broadcaster_id: id1 },
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Client-ID": "38d7rxc7ynnl2x3pb3j4txvz0v25ac",
          },
        }
      );

      if (respuestaClips.status === 200) {
        const dataClips = respuestaClips.data.data;
        setClipsDeCoscu(dataClips);
        return dataClips;
      } else {
        throw new Error("Error al obtener la lista de seguidores de Coscu.");
      }
    } catch (error: any) {
      throw new Error(
        "Error al obtener los seguidores de Coscu: " + error.message
      );
    }
  };
  return {
    clipsDeCoscu,
    streamFollowers,
    loading,
    error,
    infoData,
    streamData,
    pastBroadcast,
  };
};

export default useTwitch;
