// TwitchEmbed.tsx

import React from "react";
import useTwitch from "../../hooks/useTwitch";

const TwitchEmbed: React.FC<{}> = ({}) => {
  const { streamData, pastBroadcast } = useTwitch("coscu");

  const twitchURL = `https://player.twitch.tv/?channel=coscu&parent=react-ts-gold.vercel.app`;

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
        src={`https://player.twitch.tv/?video=${pastBroadcast.id}&parent=react-ts-gold.vercel.app`}
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
