import React from "react";
import "./Footer.sass";
import kakao from "./../../assets/icons/kakao.png";
import facebook from "./../../assets/icons/facebook.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row">
        <div className="col footer__info">
          <p className="footer__info-title">㈜파이퍼블릭</p>
          <p className="footer__info-subtitle">
            사업자등록번호 : 000-00-00000 | 대표이사 : 이호승
          </p>
          <p className="footer__info-subtitle">주소요청드립니다.</p>
          <p className="footer__info-subtitle">
            대표번호 : 02-000-0000 | E-mail : 000@000
          </p>
          <p className="footer__info-subtitle_rights">
            COPYRIGHT © 2020 파이버블릭 ALL RIGHTS RESERVED.
          </p>
        </div>
        <div className="col footer__additional-info">
          <div className="row">
            <p className="footer__additional-info__title">투자 인사이트</p>
            <p className="footer__additional-info__title"> 개인정보처리방침</p>
          </div>
          <div className="row footer__images">
            <img src={kakao} alt="kakao" className="footer__image" />
            <img src={facebook} alt="facebook" className="footer__image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;