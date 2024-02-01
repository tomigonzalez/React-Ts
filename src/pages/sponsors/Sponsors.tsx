import React, { useContext, useEffect } from "react";

import { ContentSponsors } from "./SonsorsStyle";
import Layout from "../../components/layout/Layout";
import { Context } from "../../context/Context";

const Sponsors: React.FC<{ showFooter: boolean }> = () => {
  const example = useContext(Context) as any;

  useEffect(() => {
    // Se establece showFooter en false cuando se monta el componente
    example.setShowFooter(false);

    // Se restablece showFooter a true cuando el componente se desmonta
    return () => {
      example.setShowFooter(true);
    };
  }, [example.setShowFooter]);

  return (
    <Layout>
      <ContentSponsors />
    </Layout>
  );
};
export default Sponsors;
