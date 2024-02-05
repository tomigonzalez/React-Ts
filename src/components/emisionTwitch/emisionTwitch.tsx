// TwitchEmbed.tsx

import React from "react";
import useTwitch from "../../hooks/useTwitch";

const TwitchEmbed: React.FC<{ channel: string }> = ({ channel }) => {
  const { streamData, pastBroadcast } = useTwitch("coscu");

  const parent = "https://react-ts-gold.vercel.app/"; // Reemplaza con la URL de tu sitio web

  const twitchURL = `https://player.twitch.tv/?channel=${encodeURIComponent(
    channel
  )}&muted&parent=${encodeURIComponent(parent)}`;

  if (streamData) {
    return (
      <iframe
        src={twitchURL}
        height="100%"
        width="100%"
        style={{ border: "none" }}
        allowFullScreen
      ></iframe>
    );
  } else if (pastBroadcast) {
    return (
      <iframe
        src={`https://player.twitch.tv/?video=${encodeURIComponent(
          pastBroadcast.id
        )}&muted&parent=${encodeURIComponent(parent)}`}
        height="100%"
        width="100%"
        style={{ border: "none" }}
        allowFullScreen
      ></iframe>
    );
  } else {
    return (
      <div>El canal no está en directo y no hay emisiones anteriores.</div>
    );
  }
};

export default TwitchEmbed;
