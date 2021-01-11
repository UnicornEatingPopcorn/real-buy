import React from "react";
import { Link } from "react-router-dom";
import "./Header.sass";
import logo from "./../../assets/icons/real-buy-logo.svg";

const Header = () => {
  return (
    <nav
      className="navbar navbar-expand-lg header navbar-light"
      role="navigation"
    >
      <div className="container-fluid header-container">
        <Link to="/">
          <img alt="logo" className="header-logo" src={logo} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div className="collapse navbar-collapse header-collapse" id="navbar">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 header-list">
          <li className="nav-item header-item">
            <Link className="nav-link" to="#">
              투자하기
            </Link>
          </li>
          <li className="nav-item header-long-item">
            <Link className="nav-link" to="#">
              투자 인사이트
            </Link>
          </li>
          <li className="nav-item header-item">
            <Link className="nav-link" to="#">
              회사소개
            </Link>
          </li>
          <li className="nav-item header-item">
            <Link className="nav-link" to="#">
              고객지원
            </Link>
          </li>
          <li className="nav-item header-end">
            <Link className="nav-link navlink-end" to="/mypage">
              홍길동님 마이페이지
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
