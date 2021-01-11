import React from "react";
import circular_progress from "./../../../assets/icons/circular_progress.png";

const FirstSlide = () => {
  return (
    <div className="container">
      <div className="row first-slide">
        <div className="first-slide__info">
          <div className="first-slide__letter">
            <span className="first-slide__A"></span>
            <span className="first-slide__title">A</span>
          </div>
          <div className="first-slide__letter">
            <span className="first-slide__B"></span>
            <span className="first-slide__title">B</span>
          </div>
          <div className="first-slide__letter">
            <span className="first-slide__C"></span>
            <span className="first-slide__title">C</span>
          </div>
        </div>
      </div>
      <div className="circular_progress-container">
        <img
          src={circular_progress}
          alt="circular_progress"
          className="circular_progress"
        />
      </div>
      <div className="row first-slide__row">
        <div className="col-4 first-slide__description">
          <p className="first-slide__description-title">안정형</p>
          <p className="first-slide__description-subtitle">A등급 0건</p>
          <p className="first-slide__description-subtitle">B등급 0건</p>
          <p className="first-slide__description-subtitle">C등급 0건</p>
        </div>
        <div className="col-4 first-slide__description">
          <p className="first-slide__description-title">밸런스형</p>
          <p className="first-slide__description-subtitle">A등급 0건</p>
          <p className="first-slide__description-subtitle">B등급 0건</p>
          <p className="first-slide__description-subtitle">C등급 0건</p>
        </div>
        <div className="col-4 first-slide__description">
          <p className="first-slide__description-title">고수익형</p>
          <p className="first-slide__description-subtitle">A등급 0건</p>
          <p className="first-slide__description-subtitle">B등급 0건</p>
          <p className="first-slide__description-subtitle">C등급 0건</p>
        </div>
      </div>
    </div>
  );
};

export default FirstSlide;
