import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const HeaderWhite = ({ links, openAdditionalMenu, closeAdditionalMenu }) => {
  const [isToggle, setIsToggle] = useState(false);
  const [isLoggedIn] = useState(false);

  const handleClick = () => {
    setIsToggle(!isToggle);
  };

  const closeNav = () => {
    setIsToggle(false);
  };

  return (
    <>
      <div className="header__centered-white">
        <nav
          className="navbar navbar-expand-md header navbar-light header-white"
          role="navigation"
        >
          <div className="header-container">
            <button
              className="header__navbar-toggler"
              type="button"
              onClick={handleClick}
            ></button>
            <NavLink to="/" className="header-logo__centered">
              <svg className="header-logo" />
            </NavLink>
          </div>
          <div
            className={`navbar-collapse ${
              isToggle ? "header-collapse-visible" : "header-collapse"
            }`}
            onMouseOver={openAdditionalMenu}
          >
            <ul className="navbar-nav header-list ">
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
            <div>
              {isLoggedIn ? (
                <NavLink
                  className="nav-enter-button"
                  to="/mypage/dashboard"
                  onClick={closeNav}
                  activeClassName="header__link-active"
                >
                  홍길동님 마이페이지
                </NavLink>
              ) : (
                <>
                  <NavLink
                    className="nav-login-button"
                    to="/login"
                    onClick={closeNav}
                    activeClassName="header__link-active"
                  >
                    로그인
                  </NavLink>
                  <NavLink
                    className="nav-enter-button"
                    to="/register"
                    onClick={closeNav}
                    activeClassName="header__link-active"
                  >
                    회원가입
                  </NavLink>
                </>
              )}
            </div>
          </div>
        </nav>
      </div>
      <div className="navbar__expand_link-container">
        <div
          onMouseOut={closeAdditionalMenu}
          className="navbar__expand-links navbar__expand-links-transparent"
        >
          <div className="row no-gutters navbar__expand-links_width">
            <div className="col-3 navbar__expand-column">
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
            <div className="col-2 offset-4 navbar__expand-column">
              <NavLink
                activeClassName="header__link-active"
                className="navbar__expand_link nav-link"
                to="/company-introduction"
              >
                회사소개
              </NavLink>
            </div>
            <div className="col-3 navbar__expand-column ">
              <NavLink
                activeClassName="header__link-active"
                className="navbar__expand_link nav-link"
                to="/customer-support/common"
              >
                자주하는 질문
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderWhite;
