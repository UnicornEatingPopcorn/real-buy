import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import "./Header.sass";
import HeaderTransparent from "./HeaderTransparent";
import HeaderWhite from "./HeaderWhite";

const links = [
  {
    title: "투자하기",
    path: "/investing",
    liClass: "nav-item header-item",
    linkClass: "nav-link navlink-end",
  },
  {
    title: "투자 인사이트",
    path: "/investment-insight",
    liClass: "nav-item header-long-item",
    linkClass: "nav-link navlink-end",
  },
  {
    title: "회사소개",
    path: "/company-introduction",
    liClass: "nav-item header-item",
    linkClass: "nav-link navlink-end",
  },
  {
    title: "고객지원",
    path: "/customer-support/common",
    liClass: "nav-item header-item",
    linkClass: "nav-link navlink-end",
  },
];

const Header = ({ changeHeader }) => {
  const expandLinks = document.querySelector(".navbar__expand-links");

  const openAdditionalMenu = () => {
    if (expandLinks) {
      expandLinks.classList.add("navbar__expand-links-visible");
    }
  };

  const closeAdditionalMenu = () => {
    expandLinks.classList.remove("navbar__expand-links-visible");
  };

  const location = useLocation();

  const WhichHeader = () => {
    if (changeHeader) {
      return (
        <HeaderWhite links={links} onMouseOver={() => openAdditionalMenu()} />
      );
    } else {
      return (
        <HeaderTransparent
          links={links}
          onMouseOver={() => openAdditionalMenu()}
        />
      );
    }
  };
  return (
    <>
      {location.pathname !== "/" ? (
        <HeaderWhite links={links} onMouseOver={() => openAdditionalMenu()} />
      ) : (
        <WhichHeader />
      )}
      <div className="navbar__expand_link-container">
        <div
          onMouseLeave={() => closeAdditionalMenu()}
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

export default Header;
