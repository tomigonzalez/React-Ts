import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Coscu from "../pages/coscu/Coscu";
import Content from "../pages/content/Content";
import Network from "../pages/network/Network";
import Sponsors from "../pages/sponsors/Sponsors";

const AppRoutes: React.FC<{}> = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/coscu" element={<Coscu />}></Route>
        <Route path="/content" element={<Content />}></Route>
        <Route path="/networks" element={<Network />}></Route>
        <Route
          path="/sponsors"
          element={<Sponsors showFooter={false} />}
        ></Route>

        <Route path="*" element={<div />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
