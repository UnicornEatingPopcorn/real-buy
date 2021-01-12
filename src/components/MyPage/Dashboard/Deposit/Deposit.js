import React from "react";
import bank from "./../../../../assets/icons/bank.png";
import "./Deposit.sass";

const Deposit = () => {
  return (
    <div className="deposit-container">
      <div className="deposit__header">
        <span>보유 예치금</span>
        <button className="deposit__header-button">출금</button>
      </div>
      <div className="deposit__info">
        <div className="deposit__info-account">
          <span className="deposit__info-title">신한은행</span>
          <span className="deposit__info-subtitle">834-9273-2323-45</span>
        </div>
        <div className="deposit__info-account">
          <span className="deposit__info-title">예금주</span>
          <span className="deposit__info-subtitle">리얼바이 (홍길동)</span>
        </div>
        <div className="deposit__info-account">
          <img src={bank} alt="bank" className="deposit__info-bank-logo" />
          <span className="deposit__info-text">
            신한은행 신탁관리에 의해 보호받고 있습니다.
          </span>
        </div>
      </div>
      <span className="deposit__total">0원</span>
    </div>
  );
};

export default Deposit;
