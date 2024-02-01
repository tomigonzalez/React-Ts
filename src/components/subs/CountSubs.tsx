import React, { useEffect } from "react";
import { ContenentSub, LetrasSubs, Subs } from "./CountSubsStyle";
import useTwitch from "../../hooks/useTwitch";

const CountSubs: React.FC<{}> = () => {
  const { infoData, loading, error, streamFollowers } = useTwitch("coscu");

  useEffect(() => {}, [streamFollowers, infoData]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ContenentSub>
      <Subs>
        {streamFollowers ? parseInt(streamFollowers).toLocaleString() : ""}
      </Subs>
      <LetrasSubs>SEGUIDORES</LetrasSubs>
    </ContenentSub>
  );
};

export default CountSubs;
