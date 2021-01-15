import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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

  const expandLinks = document.querySelector(".navbar__expand-links");

  const openAdditionalMenu = () => {
    expandLinks.classList.add("navbar__expand-links-visible");
  };

  const closeAdditionalMenu = () => {
    expandLinks.classList.remove("navbar__expand-links-visible");
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg header navbar-light"
        role="navigation"
      >
        <div className="container-fluid header-container">
          <NavLink to="/">
            <img alt="logo" className="header-logo" src={logo} />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            onClick={handleClick}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div
          className={`navbar-collapse ${
            isToggle ? "header-collapse-visible" : "header-collapse"
          }`}
          onMouseOver={openAdditionalMenu}
        >
          <ul className="navbar-nav header-list">
            {links.map((link) => {
              return (
                <li className={link.liClass} key={link.title}>
                  <NavLink
                    className={link.linkClass}
                    to={link.path}
                    onClick={closeNav}
                    activeClassName="header__link-active"
                  >
                    {link.title}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <div
            onMouseOut={closeAdditionalMenu}
            className="navbar__expand-links navbar__expand-links-visible col-lg-5 offset-lg-7 col-xl-4 offset-lg-4"
          >
            <div className="row no-gutters">
              <div className="col-lg-3 col-xl-3 navbar__expand-column">
                <NavLink
                  activeClassName="header__link-active"
                  className="navbar__expand_link-first nav-link"
                  to="/investing"
                >
                  투자상품
                </NavLink>
                <NavLink
                  activeClassName="header__link-active"
                  className="navbar__expand_link nav-link"
                  to="/how-to-invest"
                >
                  투자하는 방법
                </NavLink>
              </div>
              <div className="col-lg-2 offset-lg-3 navbar__expand-column">
                <NavLink
                  activeClassName="header__link-active"
                  className="navbar__expand_link nav-link"
                  to="/company-introduction"
                >
                  회사소개
                </NavLink>
              </div>
              <div className="col offset-lg-1 navbar__expand-column">
                <NavLink
                  activeClassName="header__link-active"
                  className="navbar__expand_link nav-link"
                  to="/faq"
                >
                  자주하는 질문
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
