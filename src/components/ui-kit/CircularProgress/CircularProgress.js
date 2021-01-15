import React from "react";
import "./CircularProgress.sass";

import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgress = () => {
  return (
    <CircularProgressbarWithChildren
      value={50}
      styles={buildStyles({
        pathColor: "#0C54C8",
        trailColor: "#1CA9E9",
        strokeLinecap: "round",
      })}
      strokeWidth={13}
      className="circular-progress__add"
    >
      <CircularProgressbar
        value={25}
        styles={buildStyles({
          pathColor: "#6658CB",
          trailColor: "transparent",
          strokeLinecap: "round",
        })}
        strokeWidth={13}
      />
    </CircularProgressbarWithChildren>
  );
};

export default CircularProgress;
