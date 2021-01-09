import React from "react";

const InvestmentLimit = () => {
  return (
    <div className="limit-container">
      <div className="limit__header">
        <span>잔여투자한도</span>
        <button className="limit__header-button">한도변경</button>
      </div>
      <div className="limit-info">
        <span className="limit__title">개인투자자</span>
        <div className="limit__progress-bar"></div>
        <span className="limit__about">한도 500만원 중</span>
      </div>
      <div className="limit-invest">
        <span className="limit-invest__total">5,000,000원</span>
        <span className="limit-invest__description">투자가능</span>
      </div>
    </div>
  );
};

export default InvestmentLimit;
