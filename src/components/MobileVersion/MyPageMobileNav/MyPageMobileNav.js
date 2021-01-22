import React from "react";
import "./MyPageMobileNav.sass";
import back from "./../../../assets/icons/Mobile/back.svg";
import { NavLink } from "react-router-dom";
import heart from "./../../../assets/icons/heart.png";

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

const MyPageMobileNav = () => {
  return (
    <div className="mobile-nav">
      <div className="mobile-nav__back">
        <img src={back} alt="back" className="mobile-nav__back-button" />
        <p className="mobile-nav__back-button_title">마이페이지</p>
      </div>
      <div className="mobile-nav__box">
        <div className="mobile-nav__box-left">
          <p className="mobile-nav__box-left_name">
            홍길동 <span>님</span>
          </p>
          <p className="mobile-nav__box-left_mail">hong3@gmail.com</p>
          <button className="mobile-nav__box-left_button">로그아웃</button>
        </div>
        <div className="mobile-nav__box-right">
          <p className="mobile-nav__box-right_title">내 계좌 금액</p>
          <p className="mobile-nav__box-right_sum">
            5,708,200 <span>원</span>
          </p>
          <div className="mobile-nav__box-right_cart">
            <img
              src={heart}
              alt="heart"
              className="mobile-nav__box-right_heart"
            />
            <p className="mobile-nav__box-right_button">찜한 투자 상품</p>
          </div>
        </div>
      </div>
      <div className="mobile-nav__links">
        {links.map((link) => {
          return (
            <NavLink
              to={link.path}
              key={link.title}
              activeClassName="mobile-nav__link-active"
              className="mobile-nav__link"
            >
              {link.title}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default MyPageMobileNav;
