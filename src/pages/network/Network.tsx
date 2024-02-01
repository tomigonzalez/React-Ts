import React from "react";

import { ContainerContent } from "../content/ContentStyle";
import { Title } from "../home/HomeStyle";

import InstagramHistory from "../../components/instagram/InstagramHistory";
import TwitterActividad from "../../components/twitter/TwitterActividad";
import Email from "../../components/email/Email";

const Network: React.FC<{}> = () => {
  return (
    <ContainerContent>
      <div className="left">
        <Title>INSTAGRAM</Title>
      </div>
      <InstagramHistory></InstagramHistory>

      <div className="left">
        <Title>TWITTER</Title>
      </div>
      <TwitterActividad></TwitterActividad>

      <div className="left">
        <Title>EMAIL</Title>
      </div>
      <Email></Email>
    </ContainerContent>
  );
};

export default Network;
