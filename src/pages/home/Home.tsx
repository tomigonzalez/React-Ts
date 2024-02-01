import React from "react";
import { ContenedorHome, Title } from "./HomeStyle";
import CountSubs from "../../components/subs/CountSubs";
import ContenedorStream from "../../components/stream/ContenedorStream";
import ContenedorYoutube from "../../components/youtube/ContenedorYoutube";

const Home: React.FC<{}> = () => {
  return (
    <>
      <ContenedorHome>
        <CountSubs></CountSubs>
        <ContenedorStream></ContenedorStream>
        <div className="left">
          <Title>YOUTUBE</Title>
        </div>
        <ContenedorYoutube />
      </ContenedorHome>
    </>
  );
};

export default Home;
