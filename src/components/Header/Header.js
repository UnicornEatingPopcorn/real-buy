import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.sass";
import logo from "./../../assets/icons/real-buy-logo.svg";

const links = [
  {
    title: "투자하기",
    path: "/investing",
    liClass: "nav-item header-item",
    linkClass: "nav-link",
  },
  {
    title: "투자 인사이트",
    path: "/investment-insight",
    liClass: "nav-item header-long-item",
    linkClass: "nav-link",
  },
  {
    title: "회사소개",
    path: "/company-introduction",
    liClass: "nav-item header-item",
    linkClass: "nav-link",
  },
  {
    title: "고객지원",
    path: "/customer-support",
    liClass: "nav-item header-item",
    linkClass: "nav-link",
  },
  {
    title: "홍길동님 마이페이지",
    path: "/mypage/dashboard",
    liClass: "nav-item header-end",
    linkClass: "nav-link navlink-end",
  },
];

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);

  const handleClick = () => {
    setIsToggle(!isToggle);
  };

  const closeNav = () => {
    setIsToggle(false);
  };

  return (
    <nav
      className="navbar navbar-expand-lg header navbar-light"
      role="navigation"
    >
      <div className="container-fluid header-container">
        <Link to="/">
          <img alt="logo" className="header-logo" src={logo} />
        </Link>
        <button className="navbar-toggler" type="button" onClick={handleClick}>
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
      <div
        className={`navbar-collapse ${
          isToggle ? "header-collapse-visible" : "header-collapse"
        }`}
      >
        <ul className="navbar-nav header-list">
          {links.map((link) => {
            return (
              <li className={link.liClass} key={link.title}>
                <Link
                  className={link.linkClass}
                  to={link.path}
                  onClick={closeNav}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
