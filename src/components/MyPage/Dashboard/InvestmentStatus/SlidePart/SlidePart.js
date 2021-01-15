import React from "react";
import CircularProgress from "../../../../ui-kit/CircularProgress/CircularProgress";
import "./SlidePart.sass";

const Slide = ({ index }) => {
  let text;
  switch (index) {
    case "1":
      text = "안정형";
      break;
    case "2":
      text = "밸런스형";
      break;
    case "3":
      text = "고수익형";
  }

  return (
    <>
      <div className="slide">
        <CircularProgress />
        <p className="slide__text-inside">{text}</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4 slide__column">
            <span className="slide__A"></span>
            <span className="slide__name">A등급 0건</span>
          </div>
          <div className="col-4 slide__column">
            <span className="slide__B"></span>
            <span className="slide__name">B등급 0건</span>
          </div>
          <div className="col-4 slide__column">
            <span className="slide__C"></span>
            <span className="slide__name">C등급 0건</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slide;
