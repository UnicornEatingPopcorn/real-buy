import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const HeaderTransparent = ({
  links,
  openAdditionalMenu,
  closeAdditionalMenu,
}) => {
  const [isToggle, setIsToggle] = useState(false);
  const [isLoggedIn] = useState(false);

  const handleClick = () => {
    setIsToggle(!isToggle);
  };

  const closeNav = () => {
    setIsToggle(false);
  };

  return (
    <div className="header__centered">
      <nav
        className="navbar navbar-expand-md header header-transparent"
        role="navigation"
      >
        <div className="header-container">
          <button
            className="header__navbar-toggler"
            type="button"
            onClick={handleClick}
          ></button>
          <NavLink to="/" className="header-logo__centered">
            <svg className="header-logo-blue" />
          </NavLink>
        </div>
        <div
          className={`navbar-collapse ${
            isToggle ? "header-collapse-visible" : "header-collapse"
          }`}
          onMouseOver={openAdditionalMenu}
        >
          <ul className="navbar-nav header-list header-list-transparent">
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
                className=""
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
                  className=""
                  to="/register"
                  onClick={closeNav}
                  activeClassName="header__link-active"
                >
                  회원가입
                </NavLink>
              </>
            )}
          </div>
          <div
            onMouseOut={closeAdditionalMenu}
            className="navbar__expand-links col-lg-5 offset-lg-7 col-xl-4 offset-lg-4"
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
    </div>
  );
};

export default HeaderTransparent;
