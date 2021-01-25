import React from "react";
import "./MainPage.sass";
import main from "./../../assets/icons/MainPage/main.jpg";
import howTo from "./../../assets/icons/MainPage/how-to.svg";
import phone from "./../../assets/icons/MainPage/phone.svg";
import randMark from "./../../assets/icons/MainPage/rand-mark.svg";
import innerPhone from "./../../assets/icons/MainPage/inner-phone.svg";
import frame from "./../../assets/icons/MainPage/frame.svg";
import customize from "./../../assets/icons/MainPage/customize.svg";
import computer from "./../../assets/icons/MainPage/computer.png";
import pageUp from "./../../assets/icons/MainPage/page-up.svg";
import Offers from "./Offers/Offers";
import Footer from "./../Footer/Footer";
import toBuy1 from "./../../assets/icons/MainPage/to-buy-1.svg";
import toBuy2 from "./../../assets/icons/MainPage/to-buy-2.svg";
import toBuy3 from "./../../assets/icons/MainPage/to-buy-3.svg";
import opportunity from "./../../assets/icons/MainPage/opportunity.svg";
import investment from "./../../assets/icons/MainPage/investment.svg";
import efficiency from "./../../assets/icons/MainPage/efficiency.svg";
import { Link } from "react-router-dom";

const MainPage = () => {
  const goUp = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="main__container">
      <img className="main__image" src={main} alt="main" />
      <div className="main__titles-centered">
        <div className="main__titles-block">
          <p className="main__title">꿈에 그리던 투자</p>
          <p className="main__subtitle">
            상상하는 세상! 현실이 되는 투자! <br />
            글로벌 랜드마크의 주인이 될 수 있는 기회
          </p>
        </div>
      </div>
      <Link to="/investing">
        <img className="main__to-buy-first" src={toBuy1} alt="main" />
      </Link>
      <Link to="/investing">
        <img className="main__to-buy-second" src={toBuy2} alt="main" />
      </Link>
      <Link to="/investing">
        <img className="main__to-buy-third" src={toBuy3} alt="main" />
      </Link>
      <div className="main__offers">
        <Offers />
      </div>
      <div className="why-real-buy">
        <p className="why-real-buy__title">Why Real Buy ?</p>
        <p className="why-real-buy__subtitle">
          왜 리얼바이와 함께 해야 할까요?
        </p>
        <p className="why-real-buy__mobile-title">REAL BUY 의 목표</p>
        <div>
          <div className="why-real-buy__mobile-block">
            <img
              src={opportunity}
              alt="opportunity"
              className="why-real-buy__mobile-block-pic"
            />
            <p className="why-real-buy__mobile-block-title">기회의 민주화</p>
            <p className="why-real-buy__mobile-block-subtitle">
              투자기관과 공동 투자함으로서
              <br />
              이제는 나도 투자 전문가
            </p>
          </div>
          <span></span>
          <div className="why-real-buy__mobile-block">
            <img
              src={investment}
              alt="investment"
              className="why-real-buy__mobile-block-pic"
            />
            <p className="why-real-buy__mobile-block-title">투자의 전문화</p>
            <p className="why-real-buy__mobile-block-subtitle">
              투자기관과 공동 투자함으로서
              <br />
              이제는 나도 투자 전문가!
            </p>
          </div>
          <span></span>
          <div className="why-real-buy__mobile-block">
            <img
              src={efficiency}
              alt="efficiency"
              className="why-real-buy__mobile-block-pic"
            />
            <p className="why-real-buy__mobile-block-title">자본의 효율화</p>
            <p className="why-real-buy__mobile-block-subtitle">
              불필요한 비용을 줄이고!
              <br />
              투자수익은 올리고!
              <br />
              안정성은 높이고!
            </p>
          </div>
        </div>
      </div>
      <div className="how-to">
        <p className="how-to__title">How to</p>
        <p className="how-to__subtitle">
          왜 상업용 부동산인가?
          <br />
          높은 위험보다 안정적인 투자 상품
        </p>
        <p className="how-to__sub">
          예상 가능한 배당 수익과 매각차익을 누릴 수 있는 기회
        </p>
        <div className="how-to__pic-container">
          <img src={howTo} alt="how to" className="how-to__pic" />
        </div>
      </div>
      <div className="how-to__second">
        <div className="how-to__second_text-block">
          <p className="how-to__second_title">How to</p>
          <p className="how-to__second_subtitle">
            차곡차곡 임대료 받는
            <br />
            건물주가 되는 방법
          </p>
          <p className="how-to__second_sub">
            연 6% 이상의 배당을 받는 안정적인 투자
          </p>
        </div>
        <div className="phone-container">
          <img src={phone} alt="phone" className="phone" />
        </div>
      </div>
      <div className="rand-mark">
        <div className="rand-mark__justify">
          <div className="rand-mark__text-block">
            <p className="rand-mark__text-block_title">Rand Mark</p>
            <p className="rand-mark__text-block_subtitle">
              부동산 차익을 꿈꾸며 건물에 투자하자
            </p>
            <p className="rand-mark__title">
              건물 값이 오르면 수익은 투자자에게!
            </p>
            <p className="rand-mark__subtitle">
              - 주거용 부동산 지수: KB부동산 매매지수
              <br />- 서울 상업용 부동산 지수: 이지스 (대신증권 지수)
            </p>
          </div>
          {/*<div className="rand-mark__pics">
            <div className="rand-mark__phone-pic">
              <img src={frame} className="rand-mark__frame" alt="frame" />
              <img
                src={innerPhone}
                className="rand-mark__inner-phone"
                alt="phone"
              />
            </div>
          </div>*/}
          <div className="rand-mark__phone-container">
            <img src={phone} alt="phone" className="rand-mark__phone" />
          </div>
        </div>
        <img src={randMark} alt="rand mark" className="rand-mark__pic" />
      </div>
      <div className="customize-offerings">
        <div className="customize-offerings__text-block">
          <p className="customize-offerings__title">How to</p>
          <p className="customize-offerings__subtitle">
            시장 환경과 투자자 성향에 맞는
            <br />
            맞춤형 투자 상품 공급
          </p>
          <p className="customize-offerings__sub">
            글로벌 경제, 산업, 투자 시장의 Data를 분석하여 상황에 맞는 맞춤형
            상품을 공급합니다.
          </p>
        </div>
        <div className="customize-offerings__pic-container">
          <img
            src={customize}
            alt="customize"
            className="customize-offerings__pic"
          />
        </div>
      </div>
      <div className="computer">
        <div className="computer__text-block">
          <p className="computer__title">Rand Mark</p>
          <p className="computer__subtitle">
            마음 편히 투자 수익을 확인하세요!
          </p>
          <p className="computer__sub">
            안정적인 투자와 함께 쌓여가는 배당 수익 매각차익까지 누릴 수 있는
            투자 기회
          </p>
        </div>
        <img src={computer} alt="computer" className="computer__pic" />
        <img src={pageUp} alt="to up" className="computer__up" onClick={goUp} />
      </div>
      <Footer mode="dark" />
    </div>
  );
};

export default MainPage;
