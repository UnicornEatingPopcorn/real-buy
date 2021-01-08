import React from "react";
import { Link } from "react-router-dom";
import "./Header.sass";
import logo from "./../../assets/icons/real-buy-logo.svg";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img alt="logo" src={logo} />
      </Link>
      <div className="header-list">
        <Link to="#">투자하기 </Link>
        <Link to="#">투자 인사이트 </Link>
        <Link to="#">회사소개 </Link>
        <Link to="#">고객지원</Link>
      </div>
      <div className="header-end">
        <Link to="/mypage">홍길동님 마이페이지</Link>
      </div>
    </div>
  );
};

export default Header;
