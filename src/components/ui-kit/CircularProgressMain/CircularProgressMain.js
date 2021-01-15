import React from "react";
import "./CircularProgressMain.sass";

import {
  CircularProgressbar,
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgressMain = () => {
  return (
    <CircularProgressbarWithChildren
      value={75}
      styles={buildStyles({
        pathColor: "#1CA9E9",
        trailColor: "#eee",
        strokeLinecap: "round",
      })}
      strokeWidth={13}
      className="circular-progress"
    >
      <CircularProgressbarWithChildren
        value={50}
        styles={buildStyles({
          pathColor: "#0C54C8",
          trailColor: "transparent",
          strokeLinecap: "round",
        })}
        strokeWidth={13}
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
    </CircularProgressbarWithChildren>
  );
};

export default CircularProgressMain;
