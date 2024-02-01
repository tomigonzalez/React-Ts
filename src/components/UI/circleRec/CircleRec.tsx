import React from "react";
import "./CircleRecStyle.css";
const CircleRec: React.FC<{}> = () => {
  return (
    <div className="flex recording">
      <div className="recording-circle recording-circle-50"></div>
      <div className="recording-circle recording-circle-120"></div>
      <div className="recording-circle recording-circle-150"></div>
      <div className="processing-circle processing-circle-140"></div>
      <div className="processing-circle processing-circle-160"></div>
    </div>
  );
};

export default CircleRec;
