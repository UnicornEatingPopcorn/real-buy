import React from "react";
import temp_for_3_slide from "./../../../assets/icons/temp_3-slide.png";

const ThirdSlide = () => {
  return (
    <>
      <div className="slide">
        <img src={temp_for_3_slide} alt="temporarily for 3 slide" />
      </div>
      <div className="ui grid">
        <div className="three column row">
          <div className="column slide__column">
            <span className="slide__A"></span>
            <span className="slide__name">A등급 0건</span>
          </div>
          <div className="column slide__column">
            <span className="slide__B"></span>
            <span className="slide__name">B등급 0건</span>
          </div>
          <div className="column slide__column">
            <span className="slide__C"></span>
            <span className="slide__name">C등급 0건</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdSlide;
