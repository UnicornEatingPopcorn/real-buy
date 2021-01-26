import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const HeaderWhite = ({ links, onMouseOver, onMouseOut }) => {
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
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
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
    </>
  );
};

export default HeaderWhite;
