import React from "react";
import temp_for_2_slide from "./../../../../../assets/icons/temp_2-slide.png";
import temp_for_3_slide from "./../../../../../assets/icons/temp_3-slide.png";
import temp_for_4_slide from "./../../../../../assets/icons/temp_4-slide.png";
import "./SlidePart.sass";

const Slide = ({ index }) => {
  const checkSrc = () => {
    if (index === "1") {
      return temp_for_2_slide;
    } else if (index === "2") {
      return temp_for_3_slide;
    } else {
      return temp_for_4_slide;
    }
  };

  return (
    <>
      <div className="slide">
        <img src={checkSrc()} alt="temporarily for 2 slide" />
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
