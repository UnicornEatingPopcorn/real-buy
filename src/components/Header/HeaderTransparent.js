import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const HeaderTransparent = ({ links, onMouseOut, onMouseOver }) => {
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
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
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
          <div className="header-list__end">
            {isLoggedIn ? (
              <NavLink
                className="nav-transparent-enter-button"
                to="/mypage/dashboard"
                onClick={closeNav}
                activeClassName="header__link-active"
              >
                홍길동님 마이페이지
              </NavLink>
            ) : (
              <>
                <NavLink
                  className="nav-transparent-login-button"
                  to="/login"
                  onClick={closeNav}
                  activeClassName="header__link-active"
                >
                  로그인
                </NavLink>
                <NavLink
                  className="nav-transparent-enter-button"
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
  );
};

export default HeaderTransparent;
