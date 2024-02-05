import React, { useEffect } from "react";
import {
  ContenentSub,
  ContenentSub2,
  LetrasSubs,
  Loader1,
  Loader2,
  Subs,
} from "./CountSubsStyle";
import useTwitch from "../../hooks/useTwitch";

const CountSubs: React.FC<{}> = () => {
  const { infoData, loading, error, streamFollowers } = useTwitch("coscu");

  useEffect(() => {}, [streamFollowers, infoData]);

  if (loading) {
    return (
      <ContenentSub2>
        <Loader2></Loader2>
        <Loader1></Loader1>
      </ContenentSub2>
    );
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
