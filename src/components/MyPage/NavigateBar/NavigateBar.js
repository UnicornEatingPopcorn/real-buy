import React from "react";
import { NavLink } from "react-router-dom";
import heart from "./../../../assets/icons/heart.png";
import "./NavigateBar.sass";

const links = [
  {
    title: "대시보드",
    path: "/mypage/dashboard",
  },
  {
    title: "투자내역",
    path: "/mypage/investment-details/all",
  },
  {
    title: "지급스케쥴",
    path: "/mypage/schedule",
  },
  {
    title: "나의 계좌",
    path: "/mypage/my-account",
  },
  {
    title: "회원정보",
    path: "/mypage/member-information",
  },
];

const NavigateBar = () => {
  return (
    <div className="navigate-bar">
      <div className="container navigate-bar-margin">
        <div className="row name-padding">
          <span className="name">홍길동</span>
          <span className="name-title">님</span>
          <button className="logout-button">로그아웃</button>
        </div>
        <div className="row email-padding">
          <p className="email">hong3@gmail.com</p>
        </div>
        <div className="row total-padding">
          <p className="total">내 계좌 금액</p>
        </div>
        <div className="row ammount-padding">
          <span className="ammount">5,708,200</span>
          <span className="ammount-currency">원</span>
        </div>
        <div className="row product-padding">
          <span className="product">
            <img src={heart} alt="heart" className="product-icon" />
            <p className="product-title">찜한 투자 상품</p>
          </span>
        </div>
      </div>
      <div className="navigate-divider"></div>
      <div className="navigate-links">
        {links.map((link) => {
          return (
            <NavLink
              to={link.path}
              key={link.title}
              activeClassName="link-active"
            >
              {link.title}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default NavigateBar;
