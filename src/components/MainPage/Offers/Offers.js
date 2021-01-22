import React from "react";
import "./Offers.sass";
import offerFirst from "./../../../assets/icons/Offers/offer1.png";
import offerSecond from "./../../../assets/icons/Offers/offer2.png";
import offerThird from "./../../../assets/icons/Offers/offer3.png";
import three from "./../../../assets/icons/Offers/stars3.png";
import four from "./../../../assets/icons/Offers/stars4.png";
import five from "./../../../assets/icons/Offers/stars5.png";

const Offers = () => {
  return (
    <div className="offers__container">
      <div className="offers__offer">
        <p className="offers__offer-title">글로벌 랜드 마크</p>
        <img src={offerFirst} alt="offer" className="offers__main" />
        <div className="offers__evaluation">
          <img
            src={four}
            className="offers__evaluation-four-stars"
            alt="four"
          />
          <p className="offers__evaluation-text">안전성</p>
        </div>
        <div className="offers__evaluation offers__evaluation-boarder">
          <img
            src={three}
            className="offers__evaluation-three-stars"
            alt="three"
          />
          <p className="offers__evaluation-text">수익성</p>
        </div>
        <p className="offers__return">
          예상 연 수익률<span className="offers__return-percent"> 6.2%</span>
        </p>
      </div>
      <div className="offers__offer">
        <p className="offers__offer-title">고수익형 오피스</p>
        <img src={offerSecond} alt="offer" className="offers__main" />
        <div className="offers__evaluation">
          <img
            src={three}
            className="offers__evaluation-three-stars"
            alt="three"
          />
          <p className="offers__evaluation-text">안전성</p>
        </div>
        <div className="offers__evaluation offers__evaluation-boarder">
          <img
            src={five}
            className="offers__evaluation-five-stars"
            alt="five"
          />
          <p className="offers__evaluation-text">수익성</p>
        </div>
        <p className="offers__return">
          예상 연 수익률<span className="offers__return-percent"> 8.5%</span>
        </p>
      </div>
      <div className="offers__offer">
        <p className="offers__offer-title">안정적인 오피스</p>
        <img src={offerThird} alt="offer" className="offers__main" />
        <div className="offers__evaluation">
          <img
            src={four}
            className="offers__evaluation-four-stars"
            alt="four"
          />
          <p className="offers__evaluation-text">안전성</p>
        </div>
        <div className="offers__evaluation offers__evaluation-boarder">
          <img
            src={four}
            className="offers__evaluation-four-stars"
            alt="four"
          />
          <p className="offers__evaluation-text">수익성</p>
        </div>
        <p className="offers__return">
          예상 연 수익률<span className="offers__return-percent"> 7.4%</span>
        </p>
      </div>
    </div>
  );
};

export default Offers;
