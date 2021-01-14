import React from "react";
import { Link } from "react-router-dom";
import "./RegisterInvestInfo.sass";
import bankSelect from "./../../assets/icons/bank-select.png";

const RegisterInvestInfo = () => {
  return (
    <div className="container register-investment-container">
      <div className="row">
        <div className="col register-investment__title">투자정보 입력하기</div>
      </div>
      <div className="row register-investment__block">
        <div className="col register-investment-box">
          <div className="row register-investment__first-row">
            <label className="col-sm-4 register-investment__label">
              출금계좌
            </label>
            <div className="col">
              <input
                type="text"
                value="은행 선택"
                className="register-investment__input-bank"
              />
              <img
                src={bankSelect}
                className="register-investment__icon"
                alt="icon"
              />
              <input
                type="text"
                value="000 - 0000 - 0000 - 00"
                className="register-investment__input-bank_number"
              />
            </div>
          </div>
          <div className="row">
            <label className="col-sm-4 register-investment__label">
              주민등록번호
            </label>
            <div className="col">
              <input
                type="text"
                value="-"
                className="register-investment__input-id"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col register-investment__button-column">
          <Link to="/complete-invest-info-registration">
            <button className="register-investment__button">
              투자정보 입력 완료
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterInvestInfo;
