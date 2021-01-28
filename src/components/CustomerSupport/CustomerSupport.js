import React, { useState } from "react";
import "./CustomerSupport.sass";
import { NavLink } from "react-router-dom";
import arrow from "./../../assets/icons/arrow-right.svg";
import back from "./../../assets/icons/Mobile/back.svg";

const links = [
  {
    title: "REAL BUY",
    path: "/customer-support/common",
  },
  {
    title: "투자 상품",
    path: "/customer-support/product",
  },
  {
    title: "투자 구조",
    path: "/customer-support/structure",
  },
  {
    title: "투자 방법",
    path: "/customer-support/how-to-invest",
  },
  {
    title: "회원 정보",
    path: "/customer-support/membership",
  },
  {
    title: "기타",
    path: "/customer-support/other-questions",
  },
];

const questions = [
  {
    title: "Q. REAL BUY는 어떤 회사인가요?",
    reply: "A. 실물자산 투자 플랫폼입니다.",
  },
  {
    title: "Q. REAL BUY는 어떤 서비스인가요?",
    reply: "A. ...",
  },
  {
    title: "Q. REAL BUY는 어떠한 투자를 하나요?",
    reply: "A. ...",
    className: "customer-support__block-question-last",
  },
];

const CustomerSupport = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleActive = (index) => {
    setActiveIndex(index);
  };

  const renderedItems = questions.map((question, index) => {
    let activeQuestion =
      index === activeIndex ? "customer-support__active" : "";
    let activeReply =
      index === activeIndex ? "customer-support__block-answer-active" : "";

    return (
      <React.Fragment key={index}>
        <div
          className={`customer-support__block-question ${activeQuestion} ${question.className}`}
          onClick={() => handleActive(index)}
        >
          <p className="customer-support__block-title">{question.title}</p>
          <img
            src={arrow}
            alt="arrow"
            className="customer-support__block-arrow"
          />
        </div>
        <div className={`customer-support__block-answer ${activeReply}`}>
          {question.reply}
        </div>
      </React.Fragment>
    );
  });

  return (
    <div className="customer-support">
      <div className="customer-support-mobile__back">
        <img
          src={back}
          alt="back"
          className="customer-support-mobile__back-button"
        />
        <p className="customer-support-mobile__back-button_title">마이페이지</p>
      </div>
      <div className="customer-support__container">
        <p className="customer-support__title">자주하는 질문</p>

        <div className="customer-support__links">
          {links.map((link) => {
            return (
              <NavLink
                to={link.path}
                key={link.title}
                activeClassName="customer-support__link-active"
              >
                {link.title}
              </NavLink>
            );
          })}
        </div>
        <div className="customer-support__block">{renderedItems}</div>
      </div>
    </div>
  );
};

export default CustomerSupport;
