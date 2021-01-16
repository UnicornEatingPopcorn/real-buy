import React from "react";
import "./PresentationBlock.sass";
import safetyIndex from "./../../../../assets/icons/safety-index.png";

const PresentationBlock = () => {
  return (
    <>
      <div className="details__presentation-block">
        <div className="row no-gutters">
          <div className="col col-sm-7 col-md-6 col-lg-6">
            <span className="details__safety">
              <p className="details__safety_text">투자 안전성</p>
              <img
                src={safetyIndex}
                alt="safety index"
                className="details__safety-index"
              />
            </span>
            <p className="details__name">독일 아마존 물류 센터</p>
            <span className="details__hashtags">#해외투자 #물류센터</span>
          </div>
          <div className="col col-md-5 offset-md-1 col-lg-4 offset-lg-2 details__terms-col">
            <div className="details__terms">
              <p className="details__terms_title">연수익률</p>
              <span className="details__terms-flex">
                <p className="details__terms_title-num">8.6</p>
                <p className="details__terms_title-sign">%</p>
              </span>
            </div>
            <div className="details__terms">
              <p className="details__terms_title">투자만기</p>
              <span className="details__terms-flex">
                <p className="details__terms_title-num">12</p>
                <p className="details__terms_title-subtitle">개월</p>
              </span>
            </div>
            <p className="details__schedule">2021.01.08 AM11:00 오픈예정</p>
          </div>
        </div>
      </div>

      <div className="details__terms-mobile">
        <div className="row details__terms-mobile-row">
          <div className="col details__terms-mobile-col-1">
            <p className="details__terms-mobile_title">연수익률</p>
            <span className="details__terms-mobile-flex">
              <p className="details__terms-mobile_title-num">8.6</p>
              <p className="details__terms-mobile_title-sign">%</p>
            </span>
          </div>
          <div className="col details__terms-mobile-col-2">
            <p className="details__terms-mobile_title">투자만기</p>
            <span className="details__terms-mobile-flex">
              <p className="details__terms-mobile_title-num">12</p>
              <p className="details__terms-mobile_title-subtitle">개월</p>
            </span>
          </div>
        </div>
        <p className="details__schedule-mobile">2021.01.08 AM11:00 오픈예정</p>
      </div>
    </>
  );
};

export default PresentationBlock;
