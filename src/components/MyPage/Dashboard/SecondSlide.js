import React from "react";
import temp_for_2_slide from "./../../../assets/icons/temp_2-slide.png";

const SecondSlide = () => {
  return (
    <>
      <div className="slide">
        <img src={temp_for_2_slide} alt="temporarily for 2 slide" />
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

export default SecondSlide;
