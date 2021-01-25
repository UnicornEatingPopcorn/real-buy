import React from "react";
import { useLocation } from "react-router-dom";
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
        <HeaderWhite
          links={links}
          openAdditionalMenu={openAdditionalMenu}
          closeAdditionalMenu={closeAdditionalMenu}
        />
      );
    } else {
      return (
        <HeaderTransparent
          links={links}
          openAdditionalMenu={openAdditionalMenu}
          closeAdditionalMenu={closeAdditionalMenu}
        />
      );
    }
  };
  return (
    <>
      {location.pathname !== "/" ? (
        <HeaderWhite
          links={links}
          openAdditionalMenu={openAdditionalMenu}
          closeAdditionalMenu={closeAdditionalMenu}
        />
      ) : (
        <WhichHeader />
      )}
    </>
  );
};

export default Header;
