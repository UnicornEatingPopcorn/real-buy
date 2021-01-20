import React from "react";
import "./AboutCompany.sass";
import aboutCompany from "./../../assets/icons/AboutCompany/about-company.jpg";
import realBuy from "./../../assets/icons/AboutCompany/realBuy.svg";
import beRichFirstGraph from "./../../assets/icons/AboutCompany/be-rich-1.svg";
import beRichSecondGraph from "./../../assets/icons/AboutCompany/be-rich-2.svg";
import arrow from "./../../assets/icons/arrow-up.png";

const AboutCompany = () => {
  return (
    <>
      <div className="about-company">
        <img
          src={aboutCompany}
          alt="about company"
          className="about-company__image"
        />
        <div className="about-company__image-block">
          <div className="about-company__img-container">
            <img src={realBuy} alt="real buy" />
          </div>
          <p className="about-company__title">
            "상상하는 세상이, 현실이 되는 투자"
          </p>
          <p className="about-company__subtitle">
            누구나 상상하는 세상을 투자를 통해 현실화 시키는 플랫폼이 되고자
            합니다.
          </p>
          <p className="about-company__sub">Invest to realize your dream</p>
        </div>
      </div>
      <div className="be-rich">
        <p className="be-rich__title">나도 부자가 되고싶다.</p>
        <div className="be-rich__graphs">
          <img
            src={beRichFirstGraph}
            alt="be rich graph"
            className="be-rich__col"
          />
          <img
            src={beRichSecondGraph}
            alt="be rich graph"
            className="be-rich__col"
          />
        </div>
        <p className="be-rich__subtitle">
          근로 소득만으로 아파트 가격 상승률을 따라가기 힘든 시기입니다. (근로
          소득 &lt; 자본 소득) 저성장 기조가 장기화되면서 낮은 금융 소득으로
          부자가 될 수 없습니다.
        </p>
        <div className="be-rich__inline">
          <p className="be-rich__text">벌어지는 소득격차의 해결방안</p>
          <img src={arrow} alt="arrow" className="be-rich__arrow" />{" "}
          <p className="be-rich__text be-rich__text-underline">
            상업용 부동산 투자 안전하고 높은 수익으로 부자의 꿈을 실현해보세요
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutCompany;
